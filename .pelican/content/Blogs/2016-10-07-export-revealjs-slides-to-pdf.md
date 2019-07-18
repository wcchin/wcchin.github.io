title: Exporting jupyter slides to html/pdf
tags: export, jupyter, revealjs
share_post: True

---

Exporting jupyter slides to html / pdf
---

This snippet is a file that use nbconvert and decktape to convert the revealjs html or jupyter slides into html/pdf.

## Usage
run this code to convert to pdf from notebook:
python export_reveal.py --notebook jupyter_notebook_file_name.ipynb

run this code to convert to pdf from converted html file:
python export_reveal.py --html reveal_js_file_name.html

additional options:
-o, --output	specifying an output filename, 
-c 				shortcut custimization button for customizing reveal using sky theme and concave transition
--trans			for changing transition method: concave, zoom...
--theme			for changing theme, default to simple.css

for more detail, please check:

+ nbconvert - https://github.com/jupyter/nbconvert
+ decktape - https://github.com/astefanutti/decktape

## Snippet
https://gist.github.com/wcchin/d25dea4c7f68acedb6d923f67bb0549c

<script src="https://gist.github.com/wcchin/d25dea4c7f68acedb6d923f67bb0549c.js"></script>

