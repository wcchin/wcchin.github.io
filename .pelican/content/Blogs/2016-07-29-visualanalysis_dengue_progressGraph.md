title: Space-time process of dengue transmission -- the Progression Graph
tags: python, svg, dengue
share_post: True

---

Rewrite of codes
---
This is a result from rewriting the codes of the study from a colleague. The concept behind the algorithm is to identify the space-time cluster based on the appearance of the cases. Then, track the temporal chain of the cases.

The data
---
Lets take a look on the data -- the happening of cases, using the animated svg to present:
<object id="svg1" data="/svgs/prog_event_3.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/prog_event_3.svg"> The dengue cases. click this and try to pan or zoom-in with your mouse scroll wheel. </a>  

The result
---
After the space-time clustering and progression tracking, this is the result, please wait for a few minutes, because the earlier cases did not form cluster, so it will have nothing to show at the begining:
<object id="svg1" data="/svgs/prog_map_3.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  
<a href="/svgs/prog_map_3.svg"> The space-time clusters and progressions. click this and try to pan or zoom-in with your mouse scroll wheel. </a>  
