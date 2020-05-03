---
title: Geographical PageRank Algorithms
subtitle: Algorithms for measuring concentration distribution in a spatial network.
codename: GPRas
repos: https://bitbucket.org/wcchin/gpras
downloadlink: https://bitbucket.org/wcchin/gpras/get/d00c8227d48f.zip
pypilink: https://pypi.python.org/pypi/GPRas
paperlink: http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0139509
---


### published article and applications
<a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0139509" target="blank">Chin, W. C. B., & Wen, T. H. (2015). Geographically Modified PageRank Algorithms: Identifying the Spatial Concentration of Human Movement in a Geospatial Network. PLoS ONE 10(10): e0139509. DOI:10.1371/journal.pone.0139509.</a>


## Intro.
The algorithm can be used to calculate these from a spatial network, i.e. network with x, y coordinates that can be used to calculate distance (i.e. projected accordingly from longitude and latitude):

- PR
- WPR
- DDPR (proposed in the PloSOne article above)
- GPR (proposed in the PloSOne article above)
- eDDPR (proposed in the PloSOne article above)
- eGPR (proposed in the PloSOne article above)

==============================

## dependencies

- numpy
- pandas
- geopandas
- shapely
- networkx

==============================

## installing GPRas

on windows:

install shapely first. can use conda if you are using anaconda(miniconda).

```
conda install -c scitools shapely=1.5.13
```

Geopandas is needed to be installed before installing this, which could be hard to install.
First download these from here: http://www.lfd.uci.edu/~gohlke/pythonlibs/

- GDAL
- pyproj
- Fiona

Then, install them with pip install


```sh
pip install xxx-GDAL--.whl
pip install xxx-pyproj--.whl
pip install xxx-Fiona--.whl
```

Then, install GPRas

```sh
pip install GPRas
```

==============================

## Usage



import the module

```python
import GPRas as gpr
```

### data input and create the spatial graph concentration object
Two ways of data input: csv file, nx.Graph object

**for csv file**:
prepare the file paths and file setup info

```python
nodefile = 'test_data/TP_nodes.csv'  
linkfile = 'test_data/TP_links.csv'  
node_filesetup = {'node_id':'nid', 'xcor':'xcor', 'ycor':'ycor'}  
link_filesetup = {'ori':'ori', 'des':'des', 'weight':'time'}
```

create the spatial_graph object

```python
sg = gpr.GPRas()
```

set the dataset from csv files

```python
sg.dataset.from_csv(nodefile, linkfile, node_filesetup, link_filesetup)
```

**for nx.Graph object**

```python
import networkx as nx
import pandas as pd ## just for the reading of file before creating nx.Graph
ndf = pd.read_csv(nodefile)
nii = ndf[node_filesetup['node_id']].tolist()
nxx = ndf[node_filesetup['xcor']].tolist()
nyy = ndf[node_filesetup['ycor']].tolist()
nodes_lis = [ (ii, dict(xxx=xx,yyy=yy)) for ii,xx,yy in zip(nii,nxx,nyy) ]
edf = pd.read_csv(linkfile)
eoo = edf[link_filesetup['ori']].tolist()
edd = edf[link_filesetup['des']].tolist()
edges_lis = [ (oo,dd) for oo,dd in zip(eoo,edd) ]

G = nx.Graph()
G.add_nodes_from(nodes_lis)
ag.add_edges_from(edges_lis)

## graph setup info
node_setup = dict(xcor='xxx', ycor='yyy') ## x,y columns from the nodes attr.
link_setup = None

sg = sgc()
sg.dataset.from_nx(ag, node_setup, link_setup)
```

### prepare and calculate
First, initialize the parameters

```python
sg.Initialize(iteration=5000, alpha=1., beta=1., gamma=1.)
```

Calculate all of them (6 PRs) using the above parameter

```python
sg.CalculateAll()
```

Calculate each of them using updated parameters

```python
sg.PR()
sg.WPR(alpha=2, update=True)
sg.DDPR(beta=2, update=True)
sg.GPR(alpha=3, beta=2, update=True)
sg.eDDPR(gamma=0.6, update=True)
sg.eGPR(alpha=3, gamma=0.2, update=True)
```
these calculation will change the parameters for summary output, but not the default paramters (for calculation with no paramter setup, eg. alpha=None), which are set from the initialization.

### get the results in Pandas DataFrame format
get summary df

```python
summary_df = sg.get_summary()
print summary_df.head()
```

get the nodes concentration results

```python
result_df = sg.get_results() ## default to all 6
print result_df.head()

part_result_df = sg.get_results(items=['pr', 'wpr']) ## export only PR and WPR
print part_result_df.head()
```

### export results
the results can be export directly to csv format and shapfile format

**summary table**

```python
sg.output_summary(filename='result/temp_summary.csv')
```

**to csv file**

```python
sg.to_csv(filename='result/temp_output_dd_g.csv', items=['ddpr','gpr'])

# also same as to_csv() with items=None
sg.All_to_csv(filename='result/temp_output.csv')
```

**to shp file**
prepare a crs string, or it will be default to None

```python
crs67 = '+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA +towgs84=-752,-358,-179,-0.0000011698,0.0000018398,0.0000009822,0.00002329 +units=m +no_defs'
```

export the files, which include a point shpfile for nodes and the concentration results, and a line shpfile for edge (no result inside, just for mapping)

output two of the results (PR and WPR) into one file

```python
sg.to_shps(filename_prefix='result/temp_shp_pr_wpr', crs=crs67, items=['pr','wpr'])
```

output all 6 PRs

```python
sg.All_to_shps(filename_prefix='result/temp_shp', crs=crs67)
```

### to networkx graph object
similar to the previous export

```python
ag,pos = sg.to_nx() ## default to all 6 PRs

ag,pos = sg.to_nx(items=["DDPR"])
```

demo for drawing the networkx object

```python
import matplotlib.pyplot as plt

ss = []
for n,d in ag.nodes_iter(data=True):
    ss.append(d['DDPR_score']*5000.)

fig,ax = plt.subplots()
nx.draw_networkx_nodes(ag, pos=pos, node_size=ss)
nx.draw_networkx_edges(ag, pos=pos, alpha=0.3)
ax.set_aspect('equal')
plt.show()
```

==============================
## file structure

```
Geographical PageRank Algorithms
.
├── build
│   ├── bdist.linux-x86_64
│   └── lib
│       └── GPRas
│           ├── GPRa
│           │   ├── GPR_algorithms.py
│           │   ├── __init__.py
│           │   ├── input_func.py
│           │   ├── input_funcs
│           │   │   ├── DataImport_nx.py
│           │   │   ├── FileReading_csv.py
│           │   │   └── __init__.py
│           │   ├── output_func.py
│           │   └── output_funcs
│           │       ├── __init__.py
│           │       ├── to_csv.py
│           │       ├── to_nx.py
│           │       └── to_shps.py
│           ├── GPRas.py
│           └── __init__.py
├── dist
│   ├── GPRas-0.1.0-py2.7.egg
│   ├── GPRas-0.1.0-py2-none-any.whl
│   └── GPRas-0.1.0.tar.gz
├── GPRas
│   ├── example
│   │   ├── example_nx.py
│   │   ├── example.py
│   │   ├── result
│   │   │   └── demo results
│   │   └── test_data
│   │       ├── KH_links.csv
│   │       ├── KH_nodes.csv
│   │       ├── TC_links.csv
│   │       ├── TC_nodes.csv
│   │       ├── TP_links.csv
│   │       └── TP_nodes.csv
│   ├── GPRa
│   │   ├── GPR_algorithms.py
│   │   ├── __init__.py
│   │   ├── input_func.py
│   │   ├── input_funcs
│   │   │   ├── DataImport_nx.py
│   │   │   ├── FileReading_csv.py
│   │   │   └── __init__.py
│   │   ├── output_func.py
│   │   └── output_funcs
│   │       ├── __init__.py
│   │       ├── to_csv.py
│   │       ├── to_nx.py
│   │       └── to_shps.py
│   ├── GPRas.py
│   └── __init__.py
├── GPRas.egg-info
│   ├── dependency_links.txt
│   ├── PKG-INFO
│   ├── requires.txt
│   ├── SOURCES.txt
│   └── top_level.txt
├── LICENSE.txt
├── MANIFEST.in
├── README.md
└── setup.py

```

### License

MIT License

Copyright (c) 2017 Wei Chien Benny Chin, Department of Geography, National Taiwan University

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
