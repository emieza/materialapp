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

    $('#takePicture').click(takePicture);

  }); // end of document ready
})(jQuery); // end of jQuery name space


var deviceReady = false;
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    deviceReady = true;
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}


function takePicture() {
  if(!deviceReady) {
    alert("La hardware per a la càmera no s'ha inicialitzat.");
    return;
  }

  var cameraOptions = {
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType : Camera.EncodingType.JPEG,
        correctOrientation: true,
        sourceType: Camera.PictureSourceType.CAMERA
  }

  navigator.camera.getPicture(
    function(imageURI) {
    resolveLocalFileSystemURL(imageURI, function(fileEntry) {
      // fileEntry is usable for uploading without holding image in memory...
      
      fileEntry.file(function(file) { 
        var reader = new FileReader();
    
        reader.onloadend = function() {
          // this.result contains the Data URI usable as a preview thumbnail
          $('#myImage').attr('src', this.result);
        }
    
        reader.readAsDataURL(file);
      }, cameraError);
    }, cameraError);
  }, cameraError, cameraOptions);

}


function cameraError(err) {
  alert("ERROR: "+err);
  console.log(err);
}

