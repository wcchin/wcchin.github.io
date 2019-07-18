title: Adding math formula
tags: webpage
share_post: True

---

Testing <a href="https://www.mathjax.org" target="_blank">MathJax</a>

$$ GPR_{t}A = W_{AB} \times \frac{GPR_{t-1}B}{out_B} $$

The "installing" steps is simple:

1. include the CDN in <head> ... </head>, in the case of mynt's quick start template, this could be added in the page.header.html file.
2. type the formula in tex's syntax, using the double $ as the entering and exiting characters, so that the formula is between double $ pair. 
3. note that in default setting, the inline math mode is not supported, namely the single $ pair. To use this, some code is needed to be added to overwrite this setting. 

note: I tried to install the mathjax js in asset, and it is simple and worked. But, the generating time becomes longer, like a few seconds, maybe is because of the files that come with the js are quite large. So, I changed back to use the officially provided CDN. 
