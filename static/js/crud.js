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
  $(".updateProduct").on("click", function() {
    var id = $("#updateid").val();
    var name = $("#updatename").val();
    var description = $("#updatedescription").val();
    var price = $("#updateprice").val();
    const url = `/${id}`;
    $.ajax({
      url: url,
      type: "PUT",
      data: { id: id, name: name, description: description, price: price }, // req.body
      success: function(response) {
        window.location.reload(true);
      }
    });
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

$(document).ready(function() {
  $(".modifyProduct").on("click", function() {
    var id = $(this).attr("id");
    const name = $(this)
      .closest(".productCard")
      .find(".originalname")
      .text();
    const description = $(this)
      .closest(".productCard")
      .find(".originaldescription")
      .text();

    const price = parseFloat(
      $(this)
        .closest(".productCard")
        .find(".originalprice")
        .text()
    );

    $("#updateid").val(id);
    $("#updatename").val(name);
    $("#updatedescription").val(description);
    $("#updateprice").val(price);
  });
});
