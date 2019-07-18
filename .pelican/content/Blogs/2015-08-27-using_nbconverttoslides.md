title: Using nbconvert to convert ipynb to slides in html
tags: ipython
share_post: True

---

This is a note on using nbconvert to make slides from ipynb to html, with markdown and codes using jupyter.
jupyter, nbconvert have to be installed in the computer.

Prepare the file
---
1. open a jupyter from terminal:

```
$ pyenv shell miniconda-3.9.1
$ ipython notebook
```

2. create a file (.ipynb), maybe a python2 file or R or something else which code you are going to use.

3. For the text page, change the `Code` to `Markdown`, choose `Slideshow` in Cell Toolbar.

4. Select one of the item in the Slide Type in the heading of each cell.

5. Type in markdown syntax, use tex syntax to type equation (MathJax is supported).

6. Click save, or wait until autosave.


Convert to slides:
---
1. In terminal, change directory to where the .ipynb is.

2. type this in terminal, suppose the .ipynb file's name is `filename`:

```
$ jupyter nbconvert --to slides filename.ipynb --reveal-prefix "http://cdn.jsdelivr.net/reveal.js/2.5.0"
$ ## or
$ jupyter nbconvert --to slides filename.ipynb --reveal-prefix "http://cdn.jsdelivr.net/reveal.js/2.5.0" --post serve
```

3. a file name `filename.slides.html` will be created, open it.

4. to change the theme from default to other provided theme, in address bar, add `?theme=sky` after the `filename.slides.html` .
- other theme options: simple (default), sky, beige, solarized, serif, night, moon

5. to change the default transition to other provided way, same as changing the theme, add `?transition=convex` .
- other transition options: none, fade, slide, convex, concave, zoom

6. if the themes still not meet your ideal slides, add a file in the same directory name `custom.css`, use this to alter the looks of the page, font style etc.

7. Taada

<iframe width="800" height="600" src="/assets/ipyslides/testing_slides.slides.html?theme=sky?transition=convex" frameborder="0" allowfullscreen></iframe>

