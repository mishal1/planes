function Airport(name){
	this.name = name;
	this.planes = [];
	this.isSunny = true;
};

// Airport.prototype.checkWeather = function() {
// 	this.isSunny === true
// };

Airport.prototype.hold = function(plane) {
	if(this.isSunny === true){
	this.planes.push(plane)}
};

Airport.prototype.release = function(plane) {
	if(this.isSunny === true){
	var index = this.planes.indexOf(plane);
	this.planes.splice(index,1);}
};
// may be a problem if planes have the same name

Airport.prototype.stormy = function() {
	this.isSunny = false;
};

Airport.prototype.sunny = function() {
	this.isSunny= true;
};
