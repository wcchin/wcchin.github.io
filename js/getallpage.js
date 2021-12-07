window.addEventListener('load', function () {
  var allPageList = preparePageList();
  console.log(allPageList);
})

function preparePageList() {
  var pagesAll = getPages(blog.collections["pages"]);
  var pubsAll = getPages(blog.collections["publications"]);
  var medsAll = getPages(blog.collections["mediums"]);
  var postsAll = getPages(blog.collections["posts"]);
  var allPageList = pagesAll.concat(pubsAll, medsAll, postsAll);
  return allPageList
}

function getPages(pageList) {
	var pagesAll = [];
	if (pageList.type == 'publications') {
		pageList.files.forEach(function(page) {
		  if (page.title) {
			var aPage = {
			  "title": page.title,
			  "contents": page.abstract,
			  "tags": page.tags,
			  "categories": pageList.cat,
			  "url": page.permalink,
			};
			pagesAll.push(aPage);
		  }
		})
	} else {
		pageList.files.forEach(function(page) {
		  if (page.title) {
			//var txt = page.body;
			var text = removeTags(page.body);
			var aPage = {
			  "title": page.title,
			  "contents": text,
			  "tags": page.tags,
			  "categories": pageList.type,
			  "url": page.permalink,
			};
			pagesAll.push(aPage);
		  }
		})
    }
	return pagesAll
}

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '').replace('\n','').replace('\t','').trim();
}
