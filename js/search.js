function searching(evt) {
  dd = document.getElementById("searchDropdown");
  searchTerm = document.getElementById("searchTerm").value;
  resSpace = document.getElementById("searchResults");
  if (searchTerm.length>0) {
	if (!(dd.className.includes("is-active"))) {
	  dd.className = dd.className += " is-active";
    }
	var res = executeSearch(searchTerm);
	var resStr = populateResults(res, searchTerm);
	resSpace.innerHTML = resStr;
  } else {
	dd.className = dd.className.replace(" is-active", "");
  }
}

document.getElementById("searchTerm").addEventListener("blur", function() {
  document.getElementById("searchTerm").value = "";
  document.getElementById("searchDropdown").className = document.getElementById("searchDropdown").className.replace(" is-active", "");
  document.getElementById("searchResults").innerHTML = "";
});


summaryInclude=60;
var fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.0,
  tokenize:true,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    {name:"title",weight:0.8},
    {name:"contents",weight:0.5},
    {name:"tags",weight:0.3},
    {name:"categories",weight:0.3}, 
    {name:"url",weight:0.1}
  ]
};


function executeSearch(searchQuery) {
  //var pages = require('./list.json');
  if (!(allPageList)) {
    var allPageList = preparePageList();
  }
  var fuse = new Fuse(allPageList, fuseOptions);
  var result = fuse.search(searchQuery);
  return result
}

function populateResults(result, searchQuery) {
  if (result.length>1) {
	  var resItem = "";
	  for (let i = 0; i < result.length; i++) {
		var item = result[i].item;
		
		var contents = item.contents;
		console.log(item);
		var snippet = "";
		var snippetHighlights = [];
		var tags = [];
		if( fuseOptions.tokenize ){
		  snippetHighlights.push(searchQuery);
		} else {
		  result[i].matches.forEach(function(matchKey,mvalue) {
			if(mvalue.key == "tags" || mvalue.key == "categories" ){
			  snippetHighlights.push(mvalue.value);
			} else if (mvalue.key == "contents"){
			  start = mvalue.indices[0][0]-summaryInclude>0?mvalue.indices[0][0]-summaryInclude:0;
			  end = mvalue.indices[0][1]+summaryInclude<contents.length?mvalue.indices[0][1]+summaryInclude:contents.length;
			  snippet += contents.substring(start,end);
			  snippetHighlights.push(mvalue.value.substring(mvalue.indices[0][0],mvalue.indices[0][1]-mvalue.indices[0][0]+1));
			}
		  });
		}

		if(snippet.length<1){
		  snippet += contents.substring(0,summaryInclude*2);
		}
		
		var itemcontent = '<p>'+'<strong>'+item.title+'</strong><br/>'+ snippet +'</p>'
		var itemStr = '<a href="'+ item.url +'" class="dropdown-item">'+ itemcontent +'</a>';
		resItem +=  itemStr;
	  }
  } else {
      var resItem = '<div class="dropdown-item">No results.</div>'
  }
  return resItem
}

function matching(matchKey,mvalue) {
  
}

