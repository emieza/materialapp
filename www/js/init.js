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
			for(let i in msg.artists) {
				let artist = msg.artists[i];

				let boto = $("<a href='#!' class='secondary-content'>\
							<i class='material-icons'>text_snippet</i>\
							</a>");
				boto.click(function() {
					// group ID
					let gid = artist.id;
					detallsGrup(gid);
				});
				let elem = $("\
					<li class='collection-item avatar'>\
						<img src='img/user.jpg' class='circle'>\
						<span class='title'>"+artist.name+"</span>\
						<p>"+artist.disambiguation+"</p>\
					</li>");

				elem.append(boto);

				$(".collection").append(elem);
				//console.log(msg.artists[i]);
			};
		}).fail(function () {
			alert("ERROR");
		});
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space


function detallsGrup(grup_id) {
	console.log("detallsGrup");

	// mostrem detalls del grup a la pantalla 2
	$.ajax({
		method: "GET",
		url: "https://musicbrainz.org/ws/2/artist/"+grup_id,
		dataType: "json",   // necessitem això pq ens retorni un objecte JSON
	}).done(function (msg) {
		$("#detalls").text(JSON.stringify(msg));
	}).fail(function () {
		alert("ERROR");
	});

	// canviem al tab 2
	var tabs = document.getElementById("tabs-swipe-demo");
	var tabsInstance = M.Tabs.getInstance(tabs);
	tabsInstance.select("tab2");
}


document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}
