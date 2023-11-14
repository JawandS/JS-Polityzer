var NBAccordion = (function() {
  var publicAPIs = {};
  var accordionButtons = $('.v9-accordion__toggle');

  if (!accordionButtons) {
    return;
  }

  var accordionToggle = function() {
    $('.v9-accordion__toggle').on('click', function(e) {
      $control = $(this);
      var $parent = $control.closest('.v9-accordion');
      var allowMultiple = $parent.data('allow-multiple');
      var accordionContent = $control.attr('aria-controls');

      if (allowMultiple === undefined) {
        checkOthers($control[0], $parent);
      }

      var $clickedRow = $control.closest('.v9-accordion__row');
      if ($clickedRow.hasClass('active')) {
        $clickedRow.removeClass('active');
      } else {
        $('.v9-accordion__row.active').removeClass('active');
        $clickedRow.addClass('active');
      }

      var isAriaExp = $control.attr('aria-expanded');
      var newAriaExp = isAriaExp == 'false' ? 'true' : 'false';
      $control.attr('aria-expanded', newAriaExp);

      var isAriaHid = $('#' + accordionContent).attr('aria-hidden');
      if (isAriaHid == 'true') {
        $('#' + accordionContent).attr('aria-hidden', 'false');
      } else {
        $('#' + accordionContent).attr('aria-hidden', 'true');
      }
    });
  };

  var checkOthers = function(elem, parent) {
    var others = parent.find('.v9-accordion__toggle');
    for (var i = 0; i < others.length; i++) {
      if (others[i] != elem) {
        if ($(others[i]).attr('aria-expanded') == 'true') {
          $(others[i]).attr('aria-expanded', 'false');
          var content = $(others[i]).attr('aria-controls');
          $('#' + content).attr('aria-hidden', 'true');
        }
      }
    }
  };

  publicAPIs.init = function() {
    accordionToggle();
  };

  return publicAPIs;
})();
