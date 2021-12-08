window.addEventListener('load', function () {
  var allPageList = preparePageList();
  //console.log(allPageList);
})

function preparePageList() {
  var pagesAll = getPages(blog.collections["pages"]);
  var pubsAll = getPages(blog.collections["publications"]);
  var medsAll = getPages(blog.collections["mediums"]);
  var postsAll = getPages(blog.collections["posts"]);
  var allPageList = pagesAll.concat(pubsAll, medsAll, postsAll);
  //console.log(allPageList);
  return allPageList
}

function getPages(pageList) {
  var pagesAll = [];
  if (pageList.type == 'publications') {
    pageList.files.forEach(function(page) {
      if (page.title) {
        var aPage = {
          "title": page.title,
          "contents": page.abstract, // note this different
          "tags": page.tags,
          "categories": pageList.cat,// note this different
          "url": page.permalink,
        };
        pagesAll.push(aPage);
      }
    })
  } else {
    pageList.files.forEach(function(page) {
      if (page.title) {
        var aPage = {
          "title": page.title,
          "contents": removeTags(page.body),  // note this different
          "tags": page.tags,
          "categories": pageList.type, // note this different
          "url": page.permalink,
        };
        pagesAll.push(aPage);
      }
    })
  }
  return pagesAll
}

function removeTags(str) {
  if ((str===null) || (str==='')) {
    return false;
  } else {
    str = str.toString();      
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '').replaceAll('\n','').replaceAll('\t','').trim();
  }
}
