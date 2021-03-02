(function($){
  $(function(){

  	// on document ready...

  	// init GUI
    $('.sidenav').sidenav();
	$('.fixed-action-btn').floatingActionButton();
	// els tabs necessiten ser swipeable
	$('.tabs').tabs({"swipeable":true});


	// botó cerca banda
	$('#searchButton').click(function() {

		var text = $("#searchText").val();

		$.ajax({
			method: "GET",
  			url: "https://musicbrainz.org/ws/2/artist?query="+text,
			dataType: "json",
		}).done(function (msg) {
			// buidem llista
			$(".collection").empty();
			// omplim amb les dades de la API
			for(var i in msg.artists) {
				var artist = msg.artists[i];
				var elem = $("\
					<li class='collection-item avatar'>\
						<img src='img/user.jpg' class='circle'>\
						<span class='title'>"+artist.name+"</span>\
						<p>"+artist.disambiguation+"</p>\
						<a href='#!' class='secondary-content'>\
							<i class='material-icons'>text_snippet</i>\
						</a>\
					</li>");
				$(".collection").append(elem);
				//console.log(msg.artists[i]);
			};
		}).fail(function () {
			alert("ERROR");
		});
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}
