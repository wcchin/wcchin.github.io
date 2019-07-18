title: A demonstration of how to use colouringmap and vmapper to generate a map in python
tags: colouringmap, vmapper, svg, python, visualisation
date: 2017-06-08
share_post: True
featured_image: /images/demo_colouring_vmapper.png

---

Some background

This demonstration shows how to use the colouringmap and vmapper packages to generate choropleth map. The data format that is using in these packages are the GeoPandas GeoDataFrame, which has a table-like dataframe, with one of the column to store the geometry, and a crs atribute to store the projection of the spatial features. 

The colouringmap package is used to generate levels of each row of spatial feature, and then assign a color to each of them. 
After that, you can choose to map the spatial features with the colours using matplotlib or other drawing (plot) packages. The geometry in geopandas is one of the shapely objects (polygon, multipolygon, point, or linestring). 

Or, you can choose to use the vmapper package to create a map in vector file format - svg. Svg can be used in inkscape for further figure processing. It is also the native format for inkscape. 

---

First of all, import the packages that will be used in this tutorial.

```python

from colouringmap import theme_mapping as tm
import vmapper

import pandas as pd
import geopandas as gpd
from shapely.ops import cascaded_union ## this is for disolving the goemetry of basic statistic unit into townships

```

Then, read the data into the environment

```python

gdf = gpd.read_file('/path/to/file/vil_67_N_C.shp')
print gdf.head()

```

Then, prepare the density values

```python

aa = gdf.area.tolist()
cc = gdf.NUMPOINTS.tolist()
cdens = [ c*10000/a for c,a in zip(cc,aa) ]
gdf['cdens'] = cdens

```

Now, use the colouring_sequence function to generate the level list, and also the colour list, that have the same length and in the same order as the gdf. level_list contain the level of each row, and colour_list has the colour of each row. Each row is a geometry of the spatial entities. The breaking method used here is the natural break, which is the default break for ESRI arcgis, and the break number is set to 7. The color scale map that is used in this package is imported from the <a href="https://jiffyclub.github.io/palettable/" target="blank">Palettable for python</a>, v3.0.0. So, you can go there and search for the color group and name from there, and check how is them called in this package in <a href="https://github.com/wcchin/colouringmap" target="blank">here</a>, where you can also find the list of valid break method. 

```python

level_list, colour_list, colour_tuples = tm.colouring_sequence(gdf, colorbysequence='cdens', break_method='natural_break', break_N=7, color_group='cmocean_sequential', color_name='Turbid_10')

```

The following demo how to prepare the label for each row of spatial feature. 

```python

cn = gdf.countyname.tolist()
tn = gdf.townname.tolist()
vn = gdf.villagenam.tolist()
namelab = [ c+t+v+':count='+str(n) for c,t,v,n in zip(cn,tn,vn,cc) ]
gdf['nlabel'] = namelab
gdf['level'] = level_list
gdf['colour'] = colour_list

```

The spatial feature is smaller in the previous section. So, we want to dissolve them and forming a larger area that represent the larger administrative boundary, to map it together with the smaller resolution choropleth map. So later we will overlap these geodataframe and make the larger one transparent. 

```python

tnset = list(set(tn))
t_geom = []
for t in tnset:
    temp = gdf[gdf['townname']==t]
    temp_g = temp['geometry'].tolist()
    town_bound = cascaded_union(temp_g)
    t_geom.append(town_bound)
tdf = pd.DataFrame.from_dict(dict(tname=tnset))
tgdf = gpd.GeoDataFrame(tdf, geometry=t_geom, crs=gdf.crs)

```

The following shows how to generate svg map with vmapper. First, prepare a map, that will be an interactive map (zoom, pan using mouse directly). 

```python

m = vmapper.Map(interactive=True) ## interactive will use the SVGPan.js, which will be copy automatically

```

Then, add the larger layer to the map, which color is set to 'transparent', so it will not has fill color.
The firstly added layer will be draw first, so it will be the lowest on the map. 

```python

m.add_geodataframe(tgdf, layername='township', opacity=1., strokewidth=50, strokecolor='#000', color='transparent')

```

Then, add the smaller resolution layer (finer). This one will set the color for each row, assigned from the colouringmap package, and also include the label created from above. 

```python

m.add_geodataframe(gdf, layername='crime_density', draw_setting=dict(labelby='nlabel', idby='VILLCODE', colorby='colour'),  hovercolor=(255,10,10),hoveropacity=0.9,hoverstroke="#FF0",hoverswidth=1, color=(50,50,50), opacity=0.7, strokecolor="#FFF", strokewidth=10, showlabel=True)

```

Finally, export them to a file, to the current folder (your current working directory).

```python

m.export_to_file('testing_taipei_crime_map2.svg')

```

The result will be something like this: 
(screenshot)

![screenshot of the svg map](/images/demo_colouring_vmapper.png "svg map with colouringmap and vmapper")



and the demo of svg:

<object id="svg1" data="/svgs/testing_taipei_crime_map2.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/testing_taipei_crime_map2.svg"> click this and try to pan or zoom-in with your mouse scroll wheel. </a>  


*updated (2017-06-10)*:  
updated to include legend and text with the latest version of vmapper.
