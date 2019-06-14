document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
	}, function(tabs) {
    // and use that tab to fill in out title and url
	    var tab = tabs[0];
	    console.log(tab.url);
	    var heading = document.getElementById("title");
  		heading.innerText = 'Qrcode generated for ' + tab.url;
  		var qrcode = new QRCode("qrcode");
  		qrcode.makeCode(tab.url);
	});	
});

