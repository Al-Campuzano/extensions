// Called when the user clicks on the browser action.
	chrome.browserAction.onClicked.addListener(function(tab) {
	  // No tabs or host permissions needed!
	  console.log('Removing pop up');
	  chrome.tabs.executeScript({
	    code: '$(".fc-dialog-container").remove();'
	  });
	});