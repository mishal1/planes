function Airport(name){
	this.name = name
	this.planes = [];
};

Airport.prototype.hold = function(plane) {
	this.planes.push(plane)
};

Airport.prototype.release = function(plane) {
	var index = this.planes.indexOf(plane)
	this.planes.splice(index,1)	
};
// may be a problem if planes have the same name

