title: Using plotly
tags: ipython, plotly
share_post: True

---

I made a <a href="https://wcchin.github.io/geograph/dengue_spacetimemap/" target="_blank">3D scatter plot</a> with <a href="https://plot.ly" target="_blank">plotly</a> yesterday, in ipython notebook (Jupyter).
The data was stored in github, including the processed point data (with centroid coordinate), and the boundary vertex of Taiwan.

The plot figures is at <a href="https://wcchin.github.io/geograph/dengue_spacetimemap/">Dengue cases at Taiwan from year 2014 </a> 
or in <a href="https://plot.ly/~wcchin/67/indigenous-case-imported-case-taiwan-boundary/" target="_blank">plotly</a>.

The code is as the following:

```python
import sys
reload(sys)
sys.setdefaultencoding("utf-8")
import plotly.plotly as py
from plotly.graph_objs import *
import pandas as pd
import datetime

df = pd.read_csv('https://raw.githubusercontent.com/wcchin/gdata/master/Dengue_ALL_4_1415.csv')
df_bound = pd.read_csv('https://raw.githubusercontent.com/wcchin/gdata/master/taiwan_bound_84_vertices2.csv')
yy = df['lat'].tolist()
xx = df['lon'].tolist()
zz = df['day'].tolist()
vilname = df['fullname'].tolist()
importcheck = df['importcase'].tolist()

datelist_imp = []
latlist_imp = []
lonlist_imp = []
vilname_imp = []

datelist_ind = []
latlist_ind = []
lonlist_ind = []
vilname_ind = []

year = df['year'].tolist()
month = df['month'].tolist()
day = df['day'].tolist()
for i in range(len(year)):
    thisyear = year[i]
    thismonth = month[i]
    thisday = day[i]
    thisdate = datetime.date(thisyear, thismonth, thisday)
    thisvilname=vilname[i].decode('big5')
    #print importcheck[i]
    if importcheck[i]==True:
        datelist_imp.append(thisdate)
        latlist_imp.append(yy[i])
        lonlist_imp.append(xx[i])
        vilname_imp.append(thisvilname)
    else:
        datelist_ind.append(thisdate)
        latlist_ind.append(yy[i])
        lonlist_ind.append(xx[i])
        vilname_ind.append(thisvilname)
#print len(datelist_ind)
#print len(datelist_imp)

bound_x = df_bound['lon'].tolist()
bound_y = df_bound['lat'].tolist()
zero = [datetime.date(2014,1,1)]
bound_z = zero*(len(bound_x))

trace1 = Scatter3d(
    x=lonlist_ind, 
    y=latlist_ind, 
    z=datelist_ind, 
    text=vilname_ind,
    mode='markers',
    name='indigenous case',
    marker=Marker(
        size=2,
        line=Line(
            color='rgb(0, 0, 0)',
            width=0.5
        ),
        opacity=0.8
    )
)

trace2 = Scatter3d(
    x=lonlist_imp, 
    y=latlist_imp, 
    z=datelist_imp, 
    text=vilname_imp,
    mode='markers',
    name='imported case',
    marker=Marker(
        color='rgb(255, 65, 54)',
        size=3,
        symbol='circle',
        line=Line(
            color='rgb(255, 65, 54)',
            width=1
        ),
        opacity=0.6
    )
)

tracebound = Scatter3d(
    x= bound_x,
    y= bound_y, 
    z= bound_z, 
    mode='lines',
    name='taiwan boundary',
    marker=Marker(
        color='#1f77b4',
        size=12,
        symbol='circle',
        line=Line(
            color='rgb(0,0,0)',
            width=0
        )
    ),
    line=Line(
        color='#1f77b4',
        width=1
    )
)
       
data = Data([trace1, trace2, tracebound])
layout = Layout(
    margin=Margin(
        l=0,
        r=0,
        b=0,
        t=0
    ),
    legend=Legend(
        y=0.5,
        traceorder='reversed',
        font=Font(
            size=16
        ),
        yref='paper'
    ),
    
    scene=Scene(
        xaxis=XAxis(title='longitude'),
        yaxis=YAxis(title='latitude'),
        zaxis=ZAxis(title='date')
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='Taiwan dengue cases (indigenous or imported) space-time map')
```
ps: the python environment has to complete the connection api key configuration before using the code above. 
