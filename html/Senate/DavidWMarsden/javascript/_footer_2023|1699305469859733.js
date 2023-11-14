function resize() {
  if ($(window).width() < 992) {
   $('#footer_2023 .has-accordion ul').addClass('minimize');
   $('#footer_2023 .has-accordion h3').addClass('h3-accordion');
   $('#footer_2023 .has-accordion h3 a').on("click", function(e){
    e.preventDefault();
   });
  } else {
    $('#footer_2023 ul').removeClass('minimize');
    $('#footer_2023 .has-accordion h3').removeClass('h3-accordion');
  }
}

$(document).ready( function() {
    $(window).resize(resize);
    resize();

    $('#footer_2023 h3').click(function() {
      var $h3 = $(this);
      var $ul = $(this).parent().find('ul.minimize');
      $h3.toggleClass('open');
      $ul.toggleClass('expandit');
    });
});