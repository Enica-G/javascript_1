function countCartTotal(items){
	var total = 0;
	var count = 0;
	for(var i = 0; i < items.length; i++) {
		total += items[i].price * items[i].quantity;
		count += items[i].quantity;
	}

	var message = "";
	if(items.length) {
		message = "В корзине " + count + " товаров на сумму  " + total + " рублей";
	} else {
		message = "Корзина пуста"
	}
	var $cart = document.getElementById("cart");
	$cart.textContent = message;
}

var cart = [
{
	name: "Jacket",
	price: 1000,
	quantity: 1,
},
{
	name: "T-shirt",
	price: 500,
	quantity: 3,
},
{
	name: "Socks",
	price: 200,
	quantity: 10,
},

];
countCartTotal(cart);