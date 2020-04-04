$("ul").on("click", "li", function() {
  $(this).toggleClass("checked");
});

$("ul").on("click", "#delete", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  e.stopPropagation();
});

$("#add").on("click", function() {
  $("input").toggle();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let textInput = $(this).val();
    $(this).val("");
    $("ul").append(`<li><span id="delete"><i class="fa fa-trash" aria-hidden="true"></i></span> ${textInput}</li>`);
  }
});
