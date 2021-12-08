function searching(evt) {
  var dd = document.getElementById("searchDropdown");
  var searchTerm = document.getElementById("searchTerm").value;
  if (searchTerm.length>0) {
    if (!(dd.className.includes("is-active"))) {
      dd.className = dd.className += " is-active";
    }
    //var resStr = executeSearch(searchTerm);
    document.getElementById("searchResults").innerHTML = executeSearch(searchTerm);
  } else {
    dd.className = dd.className.replace(" is-active", "");
  }
}

document.getElementById("searchTerm").addEventListener("blur", function() {
  setTimeout(function () {
    var dd = document.getElementById("searchDropdown");
    //document.getElementById("searchTerm").value = "";
    if (dd.className.includes("is-active")) {
      dd.className = dd.className.replace(" is-active", "");
    }
    //document.getElementById("searchResults").innerHTML = "";
  }, 1000);
});

document.getElementById("searchTerm").addEventListener("focus", function() {
  var dd = document.getElementById("searchDropdown");
  if (!(dd.className.includes("is-active"))) {
    dd.className = dd.className += " is-active";
  }
});

summaryInclude = 60;
var fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.4,
  tokenize: true,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    {name:"title",weight:0.8},
    {name:"contents",weight:0.7},
    {name:"tags",weight:0.5},
    {name:"categories",weight:0.3}, 
    {name:"url",weight:0.1}
  ]
};


function executeSearch(searchQuery) {
  if (typeof allPageList === 'undefined') {
    allPageList = preparePageList();
  }
  var fuse = new Fuse(allPageList, fuseOptions);
  var result = fuse.search(searchQuery);
  //console.log(result.length);
  return populateResults(result, searchQuery)
}

function populateResults(result, searchQuery) {
  if (result.length>0) {
    var resItem = "";
    for (let i = 0; i < result.length; i++) {
      var item = result[i].item;
      var contents = item.contents;
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
      var itemcontent = '<p>'+'<strong>'+item.categories+'</strong> <i class="fas fa-caret-right"></i><strong>'+item.title+'</strong><br/>'+ snippet +'</p>'
      var itemStr = '<a href="'+ item.url +'" class="dropdown-item">'+ itemcontent +'</a>';
        resItem +=  itemStr;
    }
  } else {
    var resItem = '<div class="dropdown-item">No results.</div>'
  }
  return resItem
}
