title: working with heapq in python
tags: python
share_post: True

---

simple notes on heapq
---
heapq is a data structure to implement (work with) priority queue.

Let says, there is an array of several numbers. Sometimes, we need to get the top 3 largest number in the array.
One way of getting the max or min result, is to scan all of the items (numbers) in the array, which means starting with the first number, then compare it to the second, change the number to the second one if the second is bigger, then continue until the last number. 
Then, do this again with the rest of the numbers to get the second largest, and same procedure again for the third. That means, the complexity would be approximately m x N, that m is the top m largest or smallest, and N is the number of item in the array. 

The other way is perform a sorting procedure to the array, then choose the top 3 number at the front or at the back. This solution's complexity would depend on the sorting algorithm. 

Priority queue (PQ) is like sorting, that do not sort the data in an array. But always pop out the smallest or largest item from the array.

We can use heapq to implement PQ. heapq construct a heap tree instead of sorting. There are two type of heap tree: min heap and max heap. 
A min heap is a binary tree that the parent is always smaller (or equal) than the children. A max heap is the opposite, that parrent is always larger (or equal) than children. 
So, with a min heap or max heap, it can always pop out the smallest or biggest item (respectively) from the array. 


heapq in python
---
```python
	import heapq
	alist = [3,7,4,1,9,5,8,2,3,9,5,7]  #first, create a list that populated with items

	heapq.heapify(alist) #heapify the list, that create a heap tree, inplace
	aheap=alist

	heapsort(alist) # this will create a sorted list of the list

	heapq.heappush(aheap, 10) # add the item 10 into the heap tree

	heapq.heappop(aheap) # pop out and return the smallest item from the heap tree

	aheap[0] # access the smallest number without pop it out
	 
```


<a href="https://docs.python.org/2/library/heapq.html">more details from python docs</a>

