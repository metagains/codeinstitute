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


/*document.getElementById('username').innerHTML = username;*/

window.onresize = function() {
	console.log("height: " + window.innerHeight + " width:" + window.innerWidth);

}

var finalHeight = function () {

}

var messageOffer = "Take a look at our special offers: <a href='http://www.google.com' alt='45% offer'>45%</a>";

/*document.getElementById("messageOffer").innerHTML = messageOffer;
*/


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


function updateInnterHTML(id, content) {

	document.getElementById(id).innerHTML = content;

}

/*  change availability to true */
var canship = false;
updateElementClass("shipping", canship);

/*  change stock value to false */

var instock = true;
updateElementClass("stock", instock);


var availableWeights = new Array("250g", "500g", "1kg");

updateInnterHTML("availableWeights", availableWeights.join('/'));
updateInnterHTML("selectedWeight", availableWeights[1]);

//document.getElementById("availableWeights").innerHTML = availableWeights.join("/");
//