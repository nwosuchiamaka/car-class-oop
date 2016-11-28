function vehicle (type, model, name ){
	this.type = type;
	this.model = model;
	this.name = name;
	}
//add methods that all cars can invoke
vehicle.prototype.drive =function(){

}
//instantiate new object with 'new'
var vehicle = new vehicle (car, 2015, toyota);

//invoke methods like this
vehicle.drive();
