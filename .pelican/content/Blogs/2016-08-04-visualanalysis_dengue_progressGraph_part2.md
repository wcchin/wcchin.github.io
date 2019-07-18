title: Space-time process of dengue transmission (part 2) -- the ANIMATED Progression Graph
tags: python, svg, dengue
share_post: True

---

Upgrading the visualization of the result
---
In this animation version of the calculation result, I use standard ellipse for visualizing the subclusters, and use different colours for different type of subclusters, which included the chained subclusters (in red), the solo subclusters (in yellow), and the noise (non-clustering cases, in grey). 

And, the result use the svg morphing animation for viewing the development process of the subclusters. The original intention is also to include the merging, splitting behaviors of the chained subclusters, but the svg morphing animation has a rule that the shape must have exactly same coordinates structure, which means the number of vertexes, and the M/L/Z (move to/line to/close line). Merging and splitting must change the M/L/Z structure, e.g. splitting has one shape at first, that has 1M and 1Z, after splitting will have 2M 2Z and -1L. 
So the plan has been changed. I only use different colors to separate the chained and solo clusters. The chained cluster will have several subclusters appeared at the same time.

To further upgrading the visualization, I have two more ideas:  
1. use the convex hull of each subcluster to show the location of the subcluster by time, and change the color to scale color for showing the density, because using convex hull might leads to a visualization confusing and misunderstanding(big shape with same color, means more serious, but the density might be lower). So, changing solid color to scale color or scale opacity must be done if this option is chosen.
2. use standard ellipse instead of circle, for better capturing the location of subclusters. 

The convex hull option has two challenges, first is to identify the convex hull, this part should be easy in python, because scipy has a function for this job; second is to change the colors to scale color or opaction, this part is relatively harder, because the scaling means I have to identify the max and min density, which has no standard level (e.g. how many cases per square meter can be consider the max density?). 

The standard ellipse option also has two challenges, first is to draw the ellipse, which problem related to the calculation of standard ellipse; second is to draw the circle (for subclusters at their begining that might have only one case, which means cannot calculate the standard distance, then I use the circle to show them) in the same scale. 

BTW, a legend is added, and the typo in footer is corrected.

The result
---
Open a new windows with this <a href="/svgs/event_4_morph_ellipse.svg"> link </a> to get a better view. 
<object id="svg1" data="/svgs/event_4_morph_ellipse.svg" type="image/svg+xml" style="width: 650px; height: 480px"></object>  

reference
---
how to calculate the standard ellipse
<a href="http://resources.esri.com/help/9.3/arcgisdesktop/com/gp_toolref/spatial_statistics_tools/how_directional_distribution_colon_standard_deviational_ellipse_spatial_statistics_works.htm" target="_blank">How Directional Distribution: Standard Deviational Ellipse (Spatial Statistics) works (by esri) </a>

how to draw the ellipse in python using shapely: the accepted answer by HYRY
<a href="http://stackoverflow.com/questions/15445546/finding-intersection-points-of-two-ellipses-python" target="_blank"> Finding intersection points of two ellipses (Python) </a>

