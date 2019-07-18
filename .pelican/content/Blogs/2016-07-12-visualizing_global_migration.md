title: Visualizing global migration
tags: python, svg
share_post: True

---
The global migration network
---
The migration data is obtained from the World DataBank website "[Global Bilateral Migration](http://databank.worldbank.org/data/reports.aspx?source=global-bilateral-migration#)".
It is a bilateral matrix, so using each row/column of the matrix as the nodes, and the cells between each pair of row-column as the weight of the edges, this data could be shown as a graph.

The locations of nodes
---
Using the countries' name, I used the python geocoder package, with the ArcGIS as provider, for doing the batch geocoding job. Some of them are not geocoded. These countries were geocoded using Google provider plus manually change the country's name according to wikipedia.
"Refugees" rows/columns were ignored, because it is not a country/location.

Results
---
The year 1960, 1970, 1980, 1990, 2000 were included from the data source. So they were mapped separately.

<object id="svg1" data="/svgs/workfile_4_1960.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/workfile_4_1960.svg"> Year 1960. click this and try to pan or zoom-in with your mouse scroll wheel. </a>  

<object id="svg1" data="/svgs/workfile_4_1970.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/workfile_4_1970.svg"> Year 1970. click this and try to pan or zoom-in with your mouse scroll wheel. </a>  

<object id="svg1" data="/svgs/workfile_4_1980.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/workfile_4_1980.svg"> Year 1980. click this and try to pan or zoom-in with your mouse scroll wheel. </a>  

<object id="svg1" data="/svgs/workfile_4_1990.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/workfile_4_1990.svg"> Year 1990. click this and try to pan or zoom-in with your mouse scroll wheel. </a>  

<object id="svg1" data="/svgs/workfile_4_2000.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/workfile_4_2000.svg"> Year 2000. click this and try to pan or zoom-in with your mouse scroll wheel. </a>  
