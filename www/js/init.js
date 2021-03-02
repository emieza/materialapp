(function($){
  $(function(){

  	// init GUI
    $('.sidenav').sidenav();
	$('.tabs').tabs({"swipeable":true});

	// botó cerca banda
	$('#searchButton').click(function() {
		alert("buscant...");

	});

  }); // end of document ready
})(jQuery); // end of jQuery name space



document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    


}
