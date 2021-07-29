function calculate(){
    var product = {
        name: prompt("Enter name:"),
        price: prompt("Enter price:"),
        quantity: prompt("Enter quantity:"),
    }
    var tax = product.price * product.quantity * .07;
    var total = product.price * product.quantity + tax;
    for(val in product){
        document.getElementById("info").innerHTML += `<p> ${val.toUpperCase()}: ${product[val]}</p>`
    }
    document.getElementById("info").innerHTML += `<p>Tax at 7%: ${tax.toFixed(2)}<p> <p>Total: ${total}</p>`
}





// function calculate(){
//     var prodName= prompt("Enter the product name:");
//     var quantity= prompt("Enter the quantity:");
//     var price= prompt("Enter the price:");
//     var taxes= price * quantity * .07;
//     var total= price * quantity + taxes
//     document.getElementById("info").innerHTML = `<p>Product Name: ${prodName}</p> <p>Quantity: ${quantity}</p> <p>Price: ${price}</p> <p>Taxes at 7%: ${taxes}</p> <p>Total: ${total}</p>`

// }
