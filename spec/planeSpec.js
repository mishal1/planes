'use strict';
var Plane = require('../lib/plane');

describe("Plane", function(){
	var plane, airport;

	beforeEach(function(){
		plane = new Plane();
		airport = jasmine.createSpyObj('airport', ['hold', 'release']);
	});

	it("should be defined", function(){
		expect(plane).toBeDefined();
	});

	it("should not be in the airport when flying", function(){
		expect(plane.flying).toBe(true);
	});

	it("can land", function(){
		plane.land(airport);
		expect(plane.flying).toBe(false);
	});

	it("can fly", function(){
		plane.land(airport);
		plane.fly(airport);
		expect(plane.flying).toBe(true);
	});

	it("lands in an airport", function(){
		plane.land(airport);
		expect(airport.hold).toHaveBeenCalled();
	});

	it("flys out of an airporrt", function(){
		plane.fly(airport);
		expect(airport.release).toHaveBeenCalled();
	});

});

