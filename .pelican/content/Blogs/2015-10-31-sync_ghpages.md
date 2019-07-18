title: Pushing items to gh-pages
tags: gh-pages, github
share_post: True

---

I am new to the 'git' world (a github noob). I use github as a space to store some things that I want to share with public. This website is stored in the gh-pages master branch. I have another repository that is also used as gh-pages, but not as the master branch. So I am taking this note to remind myself how to sync the branchs.

The following codes would push things from local to the master branch:

```
git add --all
git commit -m 'the message about what have been changed'
git push -u origin master
```

If the master branch is the gh-pages branch, then this is done.  
The following codes would sync the gh-pages branch with the master:

```
git checkout gh-pages
git rebase master
git push origin gh-pages
git checkout master
```

Then, the gh-pages would be online to the webpage:  
https://username.github.io/repositoryname/filename.html

