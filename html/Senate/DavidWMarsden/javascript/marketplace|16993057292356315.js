$(function () {
  function valueCheckInit() {
    var $text = $(".float-label input, .float-label select, .float-label textarea");

    $text.each(function () {
      var isSelect = $(this).is("select");
      if ($(this).val() !== "" && !isSelect) {
        $(this).attr("data-val", "true").siblings("label").addClass("float-auto");
      } else if ($(this).val() !== null && isSelect) {
        $(this).attr("data-val", "true").siblings("label").addClass("float-auto");
      }
    });
  }

  function valueCheck(e) {
    if (e.val() !== "") {
      e.attr("data-val", "true").siblings("label").addClass("float-true").removeClass("select-false float-auto");
    } else {
      e.attr("data-val", "false").siblings("label").removeClass("float-true float-auto").addClass("select-false");
    }
  }

  valueCheckInit();

  $(".float-label input").keyup(function () {
    var e = $(this);
    valueCheck(e);
  });

  $(".float-label select").change(function () {
    var e = $(this);
    valueCheck(e);
  }).focus(function () {
    $(this).closest(".select-group")
      .addClass("select-focus");
  }).focusout(function () {
    $(this).closest(".select-group").removeClass("select-focus");
  });

  $(".float-label textarea").keyup(function () {
    var e = $(this);
    var $floatLabel = $(this).siblings(".float-true");
    var labelHeight = $floatLabel.outerHeight() - 10;

    function check() {
      return e.scrollTop() > labelHeight && $floatLabel.hasClass("float-true");
    }
    if (check()) {
      return
    } else {
      valueCheck(e);
    }
  }).focus(function () {
    $(this).closest(".textarea-group").addClass("textarea-focus");
  }).focusout(function () {
    $(this).closest(".textarea-group").removeClass("textarea-focus");
  }).scroll(function () {
    var $floatLabel = $(this).siblings(".float-true");
    var labelHeight = $floatLabel.outerHeight() - 10;

    if ($(this).scrollTop() > labelHeight) {
      $floatLabel.fadeOut(300);
    } else {
      $floatLabel.fadeIn(100);
    }
  });

});