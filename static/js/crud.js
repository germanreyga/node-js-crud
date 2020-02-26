$(document).ready(function() {
  $(".deleteProduct").on("click", function() {
    var id = $(this).attr("id");
    $.ajax({
      url: `/${id}`,
      type: "DELETE",
      data: { id: id },
      success: function(response) {
        location.reload();
      }
    });
  });
});

$(document).ready(function() {
  $(".addProduct").on("click", function() {
    location.reload();
  });
});

$(document).ready(function() {
  $(".orderButton").on("click", function() {
    var name = $(".orderBy").val();
    var order = $(".orderAs").val();
    url = `/${name}/${order}`;
    console.log(url);

    window.location.href = url;
  });
});
