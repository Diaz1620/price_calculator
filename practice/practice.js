function calculate(){
    var product = {
        name: prompt("Enter name:"),
        price: prompt("Enter price:"),
        quantity: prompt("Enter quantity:"),
    }
    var tax = product.price * product.quantity * .07;
    var total = product.price * product.quantity + tax;
    for(val in product){
        document.getElementById("final").innerHTML += `<p> ${val.toUpperCase()}: ${product[val]}</p>`
    }
    document.getElementById("final").innerHTML += `<p>Tax at 7%: ${tax.toFixed(2)}<p> <p>Total: ${total}</p>`
}