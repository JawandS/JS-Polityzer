/********** jQuery functions **********
$('#reset').click(function() {
  //Do something
});
click can be replaced with each, after, before, change, data, queue, and so much more
For more useful Functions: https://code.tutsplus.com/tutorials/20-helpful-jquery-methods-you-should-be-using--net-10521
*/

jQuery(function($) {
  //Do something when document is ready
  
  
// YOUTUBE LAZY LOAD

  //var youtube = document.querySelectorAll( ".youtubeVideo" );
  var youtube = $(".youtubeVideo");

  for (var i = 0; i < youtube.length; i++) {

    var source = "https://i.ytimg.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";

    var image = new Image();
    image.src = source;
    image.style.width = "100%";
    image.style.position = "absolute";
    image.style.top = "-17%";
    image.style.cursor = "pointer";
    image.addEventListener( "load", function() {
      youtube[ i ].appendChild( image );
    }( i ) );

    var playButtonExt = document.createElement("div");
      playButtonExt.style.position = "absolute";
      playButtonExt.style.top = "50%";
      playButtonExt.style.left = "50%";
      playButtonExt.style.transform = "translate3d(-50%, -50%, 0)";
      playButtonExt.style.width = "90px";
      playButtonExt.style.height = "60px";
      playButtonExt.style.backgroundColor = "#333";
      playButtonExt.style.boxShadow = "0 0 30px rgba( 0,0,0,0.6 )";
      playButtonExt.style.zIndex = "3";
      playButtonExt.style.opacity = "0.8";
      playButtonExt.style.borderRadius = "6px";
      playButtonExt.style.cursor = "pointer";
      playButtonExt.addEventListener( "load", function() {
        youtube[ i ].appendChild( playButtonExt );
      }( i ) );

    var playButtonInt = document.createElement("div");
      playButtonInt.style.position = "absolute";
      playButtonInt.style.top = "50%";
      playButtonInt.style.left = "50%";
      playButtonInt.style.transform = "translate3d(-50%, -50%, 0)";
      playButtonInt.style.borderStyle = "solid";
      playButtonInt.style.borderWidth = "15px 0 15px 26px";
      playButtonInt.style.borderColor = "transparent transparent transparent #fff";
      playButtonInt.style.cursor = "pointer";
      playButtonInt.style.zIndex = "4";
      playButtonInt.addEventListener( "load", function() {
        youtube[ i ].appendChild( playButtonInt );
      }( i ) );


    //'<div class="play-button"></div>'

    youtube[i].addEventListener( "click", function() {

      var iframe = document.createElement( "iframe" );

      iframe.setAttribute( "frameborder", "0" );
      if (this.getAttribute("data-fs") == "true") {
        iframe.setAttribute( "allowfullscreen", "" );
        console.log("its true");
      } else {
        iframe.setAttribute( "fs", "0" );
      }
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" + (this.getAttribute("data-fs") == "true" ? "" : "&fs=0") );

      this.innerHTML = "";
      this.appendChild( iframe );
    } );
  };

  
  
  
});






//testing123
