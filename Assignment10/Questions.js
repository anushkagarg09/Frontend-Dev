<input type="text" id="searchInput" placeholder="Search products..." />
<div id="loading" style="display:none;">🔄 Loading...</div>
<div id="results"></div>



// js file

$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        let query = $(this).val().trim();

        $("#loading").show(); // show loader

        $.ajax({
            url: "/products",     // API endpoint
            type: "GET",
            data: { q: query },   // query param : ?q=value
            success: function (response) {
                $("#loading").hide(); // hide loader
                $("#results").empty();

                // if no products
                if (!response.length) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                // Loop products
                response.forEach(product => {
                    $("#results").append(`
                        <div class="product">
                            <img src="${product.image}" width="80">
                            <h4>${product.name}</h4>
                            <p>₹${product.price}</p>
                        </div>
                    `);
                });
            },
            error: function () {
                $("#loading").hide();
                $("#results").html("<p>Error fetching products</p>");
            }
        });
    });
});


// json file

[
  {
    "name": "iPhone 14",
    "price": "69999",
    "image": "https://example.com/iphone14.jpg"
  },
  {
    "name": "Samsung S23",
    "price": "59999",
    "image": "https://example.com/s23.jpg"
  }
]
