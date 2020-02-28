// Called when the user clicks on the browser action.
	chrome.browserAction.onClicked.addListener(function(tab) {
	  console.log('Removing popup');
	  chrome.tabs.executeScript({
	    code: '$(".fc-dialog-container").remove();'
	  });
	});