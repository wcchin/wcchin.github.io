function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
	//window.alert(tablinks[0].className)

	//window.alert(evt.currentTarget.parentNode.className)
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.parentNode.className += " is-active";
}

function expandCard(evt, cardName) {
	var i, cardcontent, spn;
	
	cardcontent = document.getElementById(cardName)
	cardcontent2 = document.getElementById(cardName+"2")
	spn = evt.currentTarget.childNodes[0]
	//window.alert(cardcontent.length)
	
	
	if (cardcontent.className.includes("is-hidden")) {
    cardcontent.className = cardcontent.className.replace(" is-hidden", "");
    cardcontent2.className = cardcontent2.className.replace(" is-hidden", "");
		spn.className = spn.className.replace("typcn typcn-media-play-reverse", "typcn typcn-arrow-sorted-down");
  } else {
		cardcontent.className = cardcontent.className += " is-hidden";
		cardcontent2.className = cardcontent2.className += " is-hidden";
		spn.className = spn.className.replace("typcn typcn-arrow-sorted-down", "typcn typcn-media-play-reverse");
	}
}

var scrollTop = function() {
	window.scrollTo(0, 0);
};
