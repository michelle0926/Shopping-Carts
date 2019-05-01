var productName = [];

$(".newItems").click(function(){
    var additionalItems= $("input").val();
    var displayOfNames= $(".product-name").val();
    $(".products").append("<li>" + displayOfNames + "</li>");
    productName.push(additionalItems);
    var numOfItems = productName.length;
    $(".cartItems").text("Items in cart:"+ numOfItems);
     
    
  
});

var total=0;
var prices = [];

    $(".newItems").click(function(){
    var displayOfPrices= $(".product-price").val();
    
    prices.push(displayOfPrices);
    $(".cost").append("<li>" +"$" +displayOfPrices + "</li>");
  
        total = total + parseInt(displayOfPrices);
    $(".priceTotal").text("Total:$" + total);

});

var displayOfNames= $(".product-name").val();
var displayOfPrices= $(".product-price").val();
    
$(".purchase").click(function() {
    alert("Thank you for shopping at Superior Shopping Carts and purchasing" + " " + productName[0] + "along with all your other items" + ". " + " Your total is" + " $" + total + "." + " We hope you come back soon." );
if (displayOfNames === "" || displayOfPrices === "") {
    alert("I am sorry, you have forgotten to fill in all input boxes. Please do so now.");

}

});



