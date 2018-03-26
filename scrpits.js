
function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.display = display;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is" + this.brand + ", color is " + this.color + "and the price is" + this.price + "." + "Display is" + this.display + " inch.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 4,7);

iPhone6S.printInfo();


var GalaxyS6 = new Phone("Samsung", 1000, "white", 5,1);

GalaxyS6.printInfo();


var OnePlusOne = new Phone("HTC", 1500, "black", 5,5);

OnePlusOne.printInfo();