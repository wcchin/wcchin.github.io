---
title: Flow-based PageRank
subtitle: An algorithm that calibrate the weight and PR score to meet the flow.
codename: FBPR
repos: https://bitbucket.org/wcchin/fbpr
downloadlink: https://bitbucket.org/wcchin/fbpr/get/c28c0fb71ec3.zip
paperlink: http://wcchin.github.io/publications/PHYSA_166902/
---

### published article and applications

<a href="http://wcchin.github.io/publications/PHYSA_166902/" target="blank">Wen, T. H., Chin, W. C. B., Lai, P. C. (2017). Understanding the topological characteristics and flow complexity of urban traffic congestion. Physica A: Statistical Mechanics and its Applications 473: 166-177. DOI http://dx.doi.org/10.1016/j.physa.2017.01.035</a>

book chapter
<a href="http://wcchin.github.io/publications/BookChap_ComplexSocietalSystem/" target="blank">Wen, T. H., Chin, W. C. B. & Lai, P. C. (2017). Link structure analysis of urban street networks for delineating traffic impact areas. In M. Nemiche, M. Essaaidi (eds.), Advances in Complex Societal, Environmental and Engineered Systems, Nonlinear Systems and Complexity 18. Part 2: 203-220. DOI 10.1007/978-3-319-46164-9_10, ISBN 978-3-319-46164-9.</a>

## Install it
after download and unzip the repo:

```
cd the_directory
pip install .
```

## Using it
using this package

import it
``` 
from fbpr import FBPR
```

setup the file and file setup
```
intersf = 'inter_TP_1m.csv'
flowsf = 'flow_TP_1m.csv'
inters_fs = { 'node1':'n1', 'node2':'n2' }
flows_fs = {'node':'rid', 'volume':'flow'}
```

initializing the FBPR
```
fbpr = FBPR(intersf, flowsf, inters_fs=inters_fs, flows_fs=flows_fs)
```

initialize the solutions sets, run once
```
fbpr.init_solutions(pool_size=3, set_count=3)
```

run all sets
```
fbpr.run_all(max_generation=20, max_PRiter=500, run_pool=True, save_iter=False)
```

run one set (e.g. first set)
```
run_set(0, max_generation=20, max_PRiter=500, run_pool=True, save_iter=False)
```


```
fbpr.get_optimal_sol(export=True) ## export the dataframe

optimal_sol_df = fbpr.get_optimal_sol(export=False) ## return the dataframe
```


check the performance of each set
```
fbpr.ga_performance(set_no=0)
fbpr.ga_performance(set_no=1)
fbpr.ga_performance(set_no=2)
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
