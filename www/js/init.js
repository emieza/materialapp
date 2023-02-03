(function($){
  $(function(){

  	// on document ready...

  	// init GUI
    $('.sidenav').sidenav();
	  $('.fixed-action-btn').floatingActionButton();
	  $('.tabs').tabs({"swipeable":true});


    $('#downloadBtn').click( function() {
        //alert("hola!");

        $('#llista_principal').empty();

        $.ajax({
          method: "GET",
          url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=15",
          dataType: "json",
        }).done(function (data) {

          for(let item in data) {
            console.log(data[item]["title"]);
            // aquí caldría fer mes coses, of course...
            // ...
            let newElement = $("<a id='listelement' class='collection-item' href='#!'>"+data[item]["title"]+"</a>");
            
            newElement.click( function() {
              //Creacion de objetos graficos
              let newh1 = $("<h5>"+data[item]["title"]+"</h5>");
              let newsummary = $("<p>"+data[item]["summary"]+"</p>");
              let newimage = $("<img src='"+data[item]["imageUrl"]+"'></img>");
              //Vaciando el div de la pagina 2
              $('#test-swipe-2').empty();
              //Agregando objetos graficos a la pagina 2
              $('#test-swipe-2').append(newh1);
              $('#test-swipe-2').append(newsummary);
              $('#test-swipe-2').append(newimage);
              //Saltamos a la pagina 2
              $('.tabs').tabs("select", "test-swipe-2");
            })

            $('#llista_principal').append(newElement);
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
