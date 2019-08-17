title: Updated pyreveal and created carlae
tags: pyreveal, carlae, markdown, python, visualisation
date: 2019-08-17
share_post: True
featured_image: /images/post/carlae_page.png

---

Recently I have updated the pyreveal package, to drop the dependencies that seems not relevent anymore, and simplify the installation process. In addition, I also added some small functions. 

Then, when I  was writing the readme file, I have an idea that I want to make a single page website for the project, which should have lie on the docs directory in the github project. But then I found no project to make a simple single page static site. The current avalable projects are all for building blogs, documentation, wikis or CMS, which may be small or large website, but none of them are for single page. Well, maybe for single page people will just write the html from some single page template downloaded from some website. 

But still, I wanted to automatic the process of making single page static site, so I don't need to redo the similar thing whenever I have updated a project or created a new small open source project. That leads me start developing the Carlae, which took me one day. 

Carlae is a suple simple stupid program to automatically create a single page website from the readme file. Add some yaml front matter on the readme file, call `carlae`, and you get the project page.





![the single page created by carlae](/images/post/carlae_page.png "the single page created by carlae")

A demo of carlae page, for the curlae project page. The template is created based on the skeleton.



![the updated pyreveal](/images/post/demo_pyreveal.png "the simple demo on pyreveal")

A demo of working pyreveal. 


