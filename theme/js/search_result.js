
document.getElementById("searchTerm").addEventListener("focus", function() {
  var dd = document.getElementById("searchDropdown");
  if (!(dd.className.includes("is-active"))) {
    dd.className = dd.className += " is-active";
  }
	/*
	let res = document.getElementById("searchRes");
	console.log(res.firstElementChild);
	let resList = res.firstElementChild;
	console.log(resList.firstElementChild);
  */
});
