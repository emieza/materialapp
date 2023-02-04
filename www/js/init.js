(function($){
  $(function(){

  	// on document ready...

  	// init GUI
    $('.sidenav').sidenav();
	  $('.fixed-action-btn').floatingActionButton();
	  // els tabs necessiten ser swipeable
	  //$('.tabs').tabs({"swipeable":true});

    var options = { "swipeable": true };
    var el = document.getElementById('tabs-swipe-demo');
    var tabsInstance = M.Tabs.init(el, options);

    // make clicable an element of the list and go to the next tab

    $('.collection-item.active').click(function() {
        tabsInstance.select("test-swipe-2");
    });

    $("#qrScanButton").click(qrscan);

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

function qrscan() {
  QRScanner.scan(displayContents);
  // Make the webview transparent so the video preview is visible behind it.
  QRScanner.show();
}

function displayContents(err, text) {
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);
  }
}
