---
title: TaPiTaS Algorithms
subtitle: A data exploration and visualization algorithm for understanding diffusion process.
codename: TaPiTaS
repos: https://bitbucket.org/wcchin/tapitas
downloadlink: https://bitbucket.org/wcchin/tapitas/get/c5fae3b62691.zip
paperlink: https://www.nature.com/articles/s41598-017-12852-z
---

A data exploration and visualization algorithm for understanding diffusion process.

# Method description and citation:
## Ref.:
Chin W. C. B., Wen T. H., Sabel C. E. & Wang I. H. (2017). A geo-computational algorithm for exploring the structure of diffusion progression in time and space. Scientific Reports 7: 12565. DOI http://dx.doi.org/10.1038/s41598-017-12852-z

Paper Link:
https://www.nature.com/articles/s41598-017-12852-z

Abstract Link:
https://wcchin.github.io/a-geo-computational-algorithm-for-exploring-the-structure-of-diffusion-progression-in-time-and-space.html

====================

## dependencies
- pandas
- geopandas
- scipy
- numpy
- descartes
- matplotlib
- seaborn
- shapely


====================

## Usage
similar to the example file

**column settings**

pts_setting (about the data, should be set according to data frame):

- xcor: x coordinate column,
- ycor: y coordinate column, and
- time: the time column, integer

xcor and ycor will be used to calculate distance, so probably not longitude and latitude, should be projected according to the region

```python
pts_setting = {'xcor':'xcor', 'ycor':'ycor', 'time':'days'}
```

**main parameters**

setting the three major parameter (should be set by user):
- s_radius: spatial searching radius
- T1: the time buffer, neighboring pair relationship
- T2: the time threshold, the shifting link relationship

```python
import pandas as pd
import tapitas

adf = pd.read_csv('test_data/demo_0905.csv', index_col=0)
pts_setting = {'xcor':'xx', 'ycor':'yy', 'time':'time'}
s_radius = 500
T1 = 6
T2 = 23
PG_graph = tapitas.Point_Diffusion(adf, pts_setting=pts_setting, s_radius=s_radius, T1=T1, T2=T2, resample_time=99, confidence_level=0.8, critical_value=None)
print("calculation done")

res = PG_graph.results
print(res.get_summary_df())
print(res.get_node_df())
print(res.get_cluster_df())
print(res.get_progress_df())
print(res.get_final_slinks_df())
print(res.get_final_nlinks_df())
```
