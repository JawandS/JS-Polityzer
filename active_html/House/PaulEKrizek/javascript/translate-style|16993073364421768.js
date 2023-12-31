$('document').ready(function () {
    $('#google_translate_element').on("click", function () {

        // Change language font and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#544F4B', //color of language option
              
								'width':'100%'
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
			
	     // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
      
       $("iframe").contents().find('.goog-te-menu2 tr').css ({
            
        'display': 'flex',
        'flex-direction': 'column',
           
        });
      
        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '15px');
      
      
      
        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        $("iframe").contents().find('td').css('width', '100%');
      
        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#eee').find('span.text').css('color', 'black');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
        
      
      
        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            
        'height': 'calc(100% - 50vh)',
        'width': '200px',
        'top': '40vh',
        'overflow-y': 'scroll',
        'right': '17px',
        'left': 'auto'
           
        });
      

        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%',
            'overflow-y':'scroll'
        });
    });
});