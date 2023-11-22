jQuery(document).ready( function($) {

    // Grab the .courses container
    var $container = jQuery('.isotope-container');

    var $courses = jQuery($container).isotope({
        // options
        itemSelector: '.item',
        // layoutMode: 'vertical',
        getSortData: {
            name: "h2"
        }
    });

    // layout Isotope again after all images have loaded
    // $courses.imagesLoaded( function() {
    //     $courses.isotope('layout');
    // });

    // Sort based on various factors
    jQuery('.sort-clear .sort').on('click', function() {
        if ( jQuery(this).hasClass('checked')) {
            jQuery(this).removeClass('checked');
            $container.isotope({ sortBy: 'original-order' } );
        } else {
            var sortValue = jQuery(this).attr('data-sort-value');
            $container.isotope({ sortBy: sortValue });
            jQuery(this).addClass('checked');
        }
    });

    var $checkboxes = jQuery('.filter-list input');
    $checkboxes.change(function () {
        var filters = [];
        // Get the values of the checked checkboxes.
        // Place the values in the filters array.
        $checkboxes.filter(':checked').each(function () {
            filters.push(this.value);
        });
        // Concatenate the values from the filters array into a single string.
        var filterValue = filters.join('');
        $container.isotope({ filter: filterValue });
        console.log(filterValue);
    });

    // Add the .checked class to list items holding a checked checkbox.
    jQuery('.filter-list input:checkbox').click(function () {
        jQuery('.filter-list li:has(input:checkbox:checked)').addClass('checked');
        jQuery('.filter-list li:has(input:checkbox:not(:checked))').removeClass('checked');
    });

    // Clear all checkboxes, remove .checked class from containing list items.
    jQuery('.sort-clear .clear-all').on( 'click', function() {
        jQuery('.filter-list input:checkbox:checked').removeAttr('checked');
        $container.isotope({ filter: '*' });
        jQuery('.filter-list li:has(input:checkbox:not(:checked))').removeClass('checked');
    });

});
