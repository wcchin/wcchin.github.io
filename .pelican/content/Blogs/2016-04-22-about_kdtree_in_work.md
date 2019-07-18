title: the nearest neighbours in two dimensions space
tags: python
share_post: True

---

nearest neighbours
---
Which points are the nearest neighbours, or top N nearest neighbours, are the frequently used procedures in point data analysis. 
Sometimes, we might need to find the neighbours in-radius of some distance. 

K-d tree is one of the data structure for searching the points that is closer to a target point that is in k-dimensions. 
E.g. for 2-d points, each point has a x coordinate and a y coordinate, it is called 2-d tree. 
In a 2-d tree, starting from the root, is the first dimension (let say x-dimension), then the second level would be for the second dimension (y-dimension).
The idea is to divide the points into two groups in each level, smaller item go to the left, bigger item go to the right...

So, the kd-tree helps to reduce the k-dimension nearest neighbours problem into a simpler problem (in terms of complexity), by using the divide-and-conquer trick.

working in python
---
In this example, base points are the points in the ground, let says, the shops;
source points are the points that is going to search for the nearest destinations (base points), let says, the location of the people. 
The aim is to locate the shops that is nearby to each person. 
So, it would be for each person, search one time.

```python
from scipy import spatial

xlist = [5,4,3,8,7,6] # x coordinates of base points...
ylist = [1,0,3,8,5,3] # y coordinates of base points...

px = [2.4, 4.8, 1.2] # x coordinates for the three people
py = [1.1, 6.3, 9.8] # y coordinates for the three people

data = zip(xlist,ylist)
pts = zip(px,py)
tree = spatial.KDTree(data)

nn_radius = 3 # the nearby radius for searching
nlist = tree.query_ball_point(x=pts, r=nn_radius) 
# If x is a single point, returns a list of the indices of the neighbors of x. 
# If x is an array of points, returns an object array of shape tuple containing lists of neighbors.
# in this case, it will return an array of list, which represent the index of the nearby neighbours in the data list. 

```
besides query_ball_point, there are other methods (from <a href="http://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.KDTree.html#scipy.spatial.KDTree">scipy</a>):

```python
count_neighbors(other, r[, p])	#Count how many nearby pairs can be formed.
query(x[, k, eps, p, distance_upper_bound])	#Query the kd-tree for nearest neighbors
query_ball_tree(other, r[, p, eps])	#Find all pairs of points whose distance is at most r
query_pairs(r[, p, eps])	#Find all pairs of points within a distance.
sparse_distance_matrix(other, max_distance)	#Compute a sparse distance matrix
```

<a href="http://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.KDTree.html#scipy.spatial.KDTree">more details from scipy docs</a>
