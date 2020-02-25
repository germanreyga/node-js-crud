$(document).ready(function() {
  $(".deleteProduct").on("click", function() {
    var id = $(this).attr("id");
    $.ajax({
      url: "/" + id,
      type: "DELETE",
      data: { id: id }
    });
  });
});
