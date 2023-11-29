$(document).ready(function () {
  $('.slick-slider').slick({
    infinite: false,
    appendArrows: $('.slick-controls'),
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnChange: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ],
    prevArrow: '<button type="button" name="previous posts" class="slider-prev"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="black"/><path d="M19.8486 30.2334C19.8486 30.57 19.9775 30.8636 20.2354 31.1143L27.3145 38.1826C27.5651 38.4261 27.848 38.5479 28.1631 38.5479C28.4925 38.5479 28.7682 38.4404 28.9902 38.2256C29.2122 38.0107 29.3232 37.7422 29.3232 37.4199C29.3232 37.2552 29.291 37.1012 29.2266 36.958C29.1621 36.8148 29.0762 36.6895 28.9688 36.582L26.5625 34.1543L22.5664 30.502L22.1797 31.1895L25.9072 31.4043H38.959C39.3171 31.4043 39.6035 31.2969 39.8184 31.082C40.0404 30.86 40.1514 30.5771 40.1514 30.2334C40.1514 29.8825 40.0404 29.5996 39.8184 29.3848C39.6035 29.1628 39.3171 29.0518 38.959 29.0518H25.9072L22.1797 29.2773L22.5664 29.9756L26.5625 26.3125L28.9688 23.874C29.0762 23.7666 29.1621 23.6449 29.2266 23.5088C29.291 23.3656 29.3232 23.208 29.3232 23.0361C29.3232 22.7139 29.2122 22.4453 28.9902 22.2305C28.7682 22.0156 28.4925 21.9082 28.1631 21.9082C28.0055 21.9082 27.8551 21.9404 27.7119 22.0049C27.5687 22.0693 27.4326 22.166 27.3037 22.2949L20.2354 29.3525C19.9775 29.6032 19.8486 29.8968 19.8486 30.2334Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" name="next posts" class="slider-next"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="black"/><path d="M40.1514 29.7666C40.1514 29.43 40.0225 29.1364 39.7647 28.8857L32.6856 21.8174C32.4349 21.5739 32.152 21.4521 31.8369 21.4521C31.5075 21.4521 31.2318 21.5596 31.0098 21.7744C30.7878 21.9893 30.6768 22.2578 30.6768 22.5801C30.6768 22.7448 30.709 22.8988 30.7734 23.042C30.8379 23.1852 30.9238 23.3105 31.0313 23.418L33.4375 25.8457L37.4336 29.498L37.8203 28.8105L34.0928 28.5957L21.041 28.5957C20.6829 28.5957 20.3965 28.7031 20.1816 28.918C19.9596 29.14 19.8486 29.4228 19.8486 29.7666C19.8486 30.1175 19.9596 30.4004 20.1816 30.6152C20.3965 30.8372 20.6829 30.9482 21.041 30.9482L34.0928 30.9482L37.8203 30.7227L37.4336 30.0244L33.4375 33.6875L31.0313 36.126C30.9238 36.2334 30.8379 36.3551 30.7734 36.4912C30.709 36.6344 30.6768 36.792 30.6768 36.9639C30.6768 37.2861 30.7878 37.5547 31.0098 37.7695C31.2318 37.9844 31.5075 38.0918 31.8369 38.0918C31.9945 38.0918 32.1449 38.0596 32.2881 37.9951C32.4313 37.9307 32.5674 37.834 32.6963 37.7051L39.7647 30.6475C40.0225 30.3968 40.1514 30.1032 40.1514 29.7666Z" fill="white"/></svg></button>'
  });

  $("#block-1" )
    .on("mouseenter", function() {
      $(this).css({ backgroundColor: "#FFDF8D" });
    })
    .on("mouseleave", function() {
      $(this).css({ backgroundColor : "#EDEDED" });
    });

  $("#block-2" )
    .on("mouseenter", function() {
      $(this).css({ backgroundColor: "#FFAC97" });
    })
    .on( "mouseleave", function() {
      $(this).css({ backgroundColor : "#EDEDED" });
    });

  $( "#block-3" )
    .on( "mouseenter", function() {
      $(this).css({ backgroundColor: "#AAECFF" });
    })
    .on( "mouseleave", function() {
      $(this).css({ backgroundColor : "#EDEDED" });
    });

  $( "#block-4" )
    .on("mouseenter", function() {
      $(this).css({ backgroundColor: "#DBDEFF" });
    })
    .on("mouseleave", function() {
      $(this).css({ backgroundColor: "#EDEDED" });
    });
});