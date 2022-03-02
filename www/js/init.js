(function($){
  $(function(){

  	// on document ready...

  	// init GUI
    $('.sidenav').sidenav();
	  $('.fixed-action-btn').floatingActionButton();
	  // els tabs necessiten ser swipeable
	  $('.tabs').tabs({"swipeable":true});

    /*var options = { "swipeable": true };
    var el = document.getElementById('tabs-swipe-demo');
    var tabsInstance = M.Tabs.init(el, options);
    */

    // make clicable an element of the list and go to the next tab
    $('.collection-item').click(function() {
        //tabsInstance.select("test-swipe-2");
        //$('.tabs').tabs("select","test-swipe-2");
    });


    // busca button
    $('#searchButton').click( loadNews );

  }); // end of document ready
})(jQuery); // end of jQuery name space



function loadNews() {
  $.ajax({
    method: "GET",
    url: "https://api.spaceflightnewsapi.net/v3/articles",
    dataType: "json",   // necessitem això pq ens retorni un objecte JSON
  }).done(function (data) {
    // buidem llista
    $('.collection').empty();

    // omplim amb nous items
    for(let item in data) {
      console.log(data[item].title);
      // creem un item per cada news
      let elem = $('<a class="collection-item">' +
                 data[item].title + '</a>');
      // afegim funcionalitat d'obrir info a la pestanya
      elem.click( ()=> {
        // carreguem dades al tab2
        loadArticle(data[item]);
        // movem UI al tab2 per llegir
        $('.tabs').tabs("select","tab2");
      });
      // afegim element a la llista
      $('.collection').append(elem);
    };
  }).fail(function () {
    alert("ERROR");
  });
}


function loadArticle(article) {
  let title = $("<h2>"+article.title+"</h2>");
  let summary = $("<p>"+article.title+"</p>");
  let image = $("<img class='materialboxed' style='width:100%' src='"+article.imageUrl+"' />");
  let link = $("<a href='"+article.url+"'>Read more...</a>")

  $("#tab2 .container").empty();
  //$("#tab2").append("prova");

  $("#tab2 .container").append(title);  
  $("#tab2 .container").append(summary);  
  $("#tab2 .container").append(image);  
  $("#tab2 .container").append(link);  

}


document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}
