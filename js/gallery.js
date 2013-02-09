/* gallery js */
var populateGallery = function(gallery, noOfImages) {
  //console.log("Populating Gallery with " + noOfImages + " images");
  for(var i = 1; i <= noOfImages; i++) {
    image = document.createElement('img');
    src = "./images/gallery/" + i + ".jpg";
    //image.src = "./images/gallery/" + i + ".jpg";
    image.id = i;
    image.style.backgroundImage = "url('" + src + "')";
    gallery[0].appendChild(image);
  }
  width = noOfImages * 968;
  gallery.css({'width': width});
}


$(document).ready( function () {

    //no of images in gallery
    noOfImages = 14;
    gallery = $('.pics');

    //populate the gallery with images
    populateGallery(gallery, noOfImages);

    //show controls on mouseenter on gallery
    $('.gallery').mouseenter(function(){
      //show the controls
      $('.control-right').css({'display':'inline'});
      $('.control-left').css({'display':'inline'});
    });

    //hide controls on mouseenter on gallery
    $('.gallery').mouseleave(function(){
      //hide the controls
      $('.control-right').css({'display':'none'});
      $('.control-left').css({'display':'none'});
    });   

    $('.control-left a').mouseenter(function() {
      $('.control-left a').css({'background-position':'0% 100%'});
    }); 

    $('.control-right a').mouseenter(function() {
      $('.control-right a').css({'background-position':'100% 100%'});
    });

    $('.control-left a').mouseleave(function() {
      $('.control-left a').css({'background-position':'0% 0%'});
    }); 

    $('.control-right a').mouseleave(function() {
      $('.control-right a').css({'background-position':'100% 0%'});
    });


    //converts and returns matrix to array
    var matrixToArray = function (matrix) {
      return matrix.substr(7, matrix.length - 8).split(', ');
    }

    
    //initial value
    X = 0;
    $('.pics').css({'-webkit-transform':'translateX(' + X + 'px)'});

    //gallery working
    $('.control-right a').click(function() {
      matrix = matrixToArray($('.pics').css('-webkit-transform'));
      X = Math.floor(parseInt(matrix[4]) / 968 ) * 968;
      if(X <= -968*(noOfImages - 1)) {
        X = 0;
      } else {
        X = X - 968;
      }
      $('.pics').css({'-webkit-transform':'translateX(' + X + 'px)'});
    });

    $('.control-left a').click(function() {
      matrix = matrixToArray($('.pics').css('-webkit-transform'));
      X = Math.floor(parseInt(matrix[4]) / 968) * 968;
      if(X >= 0) {
        X = -968*(noOfImages - 1);
      } else {
        X = X + 968;
      }
      $('.pics').css({'-webkit-transform':'translateX(' + X + 'px)'});
    });
    


});