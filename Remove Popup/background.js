// Called when the user clicks on the browser action.
	chrome.browserAction.onClicked.addListener(function(tab) {
	  removePopup();
	});
	
	chrome.commands.onCommand.addListener(function(command) {
      console.log('Command:', command);
			if (command === 'remove-popup') {
				removePopup();
			}
  });
		
	let removePopup = function() {
		console.log('Removing popup');
	  chrome.tabs.executeScript({
	    code: 'document.querySelector(".fc-dialog-container").remove();'
	  });		
	};