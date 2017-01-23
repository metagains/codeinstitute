/* Online store javascript */


var quantity = 3;
var price = 4;


function totalPrice(units, price) {
	return units * price;
}


function totalPriceCallback(units, price) {


	document.getElementById('totalprice').innerHTML = "€" + totalPrice(units, price);


}

function getGreetingMessage(dateObject) {

	var hours = dateObject.getHours();
	var greeting = "Morning";
	if (hours > 12 && hours < 18) {

		greeting = "Afternoon";
	} else if (hours > 18)  {
		greeting = "Evening";

	}

	return greeting;

}

var today = new Date();
var username = "Donald Trump";
var message = "Good " + getGreetingMessage(today);


document.getElementById('greetingtext').innerHTML = message ;
document.getElementById('username').innerHTML = username;

window.onresize = function() {
	console.log("height: " + window.innerHeight + " width:" + window.innerWidth);

}

var finalHeight = function () {

}

var messageOffer = "Take a look at our special offers: <a href='http://www.google.com' alt='45% offer'>45%</a>";

document.getElementById("messageOffer").innerHTML = messageOffer;



/*var instock = false;
var shipping = true;


stockelement = document.getElementById("stock");
stockelement.className = instock;

shippingelement = document.getElementById("shipping");
shippingelement.className = shipping;
*/

function updateElementClass(elementName, className) {
	document.getElementById(elementName).className = className;
}


/*  change availability to true */
var canship = false;
updateElementClass("shipping", canship);

/*  change stock value to false */

var instock = true;
updateElementClass("stock", instock);

