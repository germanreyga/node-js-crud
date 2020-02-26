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
  $(".searchProduct").on("click", function() {
    var id = $("#searchID").val();
    console.log(id);
    const url = `/${id}`;
    $.ajax({
      url: url,
      type: "GET",
      data: { id: id },
      success: function(response) {
        window.location.href = url;
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
    window.location.href = url;
  });
});
