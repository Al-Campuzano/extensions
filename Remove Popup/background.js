// Called when the user clicks on the browser action.
	chrome.browserAction.onClicked.addListener(function(tab) {
	  removePopup();
	});
		
	let removePopup = function() {
		console.log('Removing popup');
	  chrome.tabs.executeScript({
	    code: 'document.querySelector(".fc-dialog-container").remove();'
	  });		
	};