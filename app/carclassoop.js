var Car = function(name, model, type) {
  if(typeof name === 'undefined') {
    this.name = 'General';
  }else{
    this.name = name;
  }

  if(typeof model === 'undefined') {
    this.model = 'GM';
  }else{
    this.model = model;
  }
  
  if(name === 'Porshe' || name === 'Koenigsegg') {
    this.numOfDoors = 2;
  } else {
  	this.numOfDoors = 4;
  }
  //'Koenigsegg', 'Agera R'
  if(type === 'trailer') {
    this.numOfWheels = 8;
    this.isSaloon = false;
  }else if (model === 'Agera R') {
  	this.numOfWheels = 4;
    this.isSaloon = true;
  }
  
  this.speed = '0 km/h';
  var that = this;
  this.drive = function(level) {
    
    if(level === 5) {
      that.speed = '250 km/h';
    }else if(level === 7) {
      that.speed = '77 km/h';
    }
    
    return that;
 
  }
  
};
module.exports = Car;