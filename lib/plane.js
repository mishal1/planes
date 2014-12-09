var Plane = function Plane (){
	this.flying = true;
};

Plane.prototype.land = function(airport) {
	this.flying = false;
	airport.hold(this);
};

Plane.prototype.fly = function(airport) {
	this.flying = true;
	airport.release(this);
};

module.exports = Plane;