title: Blog
menu-position: 10
date: 2020-03-19
---

<!--%
from datetime import datetime
posts = [p for p in pages if "post" in p] # get all blog post pages
posts.sort(key=lambda p: p.get("date"), reverse=True) # sort post pages by date
for p in posts:
    date = datetime.strptime(p.date, "%Y-%m-%d").strftime("%B %d, %Y")
    #print("  * **[%s](%s)** - %s" % (p.post, p.url, date)) # markdown list item
    print("  * *[%s](%s)* - %s" % (p.title, p.url, date)) # markdown list item
%-->

