// 'use strict';
var Airport = require('../lib/airport');

describe('Airport', function(){
	var airport, plane;

	beforeEach(function(){
		airport = new Airport('name');
		plane = jasmine.createSpyObj('plane',[""]);
	});

	it("should have no planes when initialized", function(){
		expect(airport.planes).toEqual([]);
	});

	it("should have a name", function(){
		expect(airport.name).toEqual('name');
	});


	it("should can hold a plane", function(){
		airport.hold(plane);
		expect(airport.planes).toEqual([plane]);
	});

	it("can release planes", function(){
		airport.hold(plane);
		airport.release(plane);
		expect(airport.planes).toEqual([]);
	});

	it("the airport has sunny weather when created", function(){
		expect(airport.isSunny).toBe(true);
	});

	it("the airport can have stormy weather", function(){
		airport.stormy();
		expect(airport.isSunny).toBe(false);
	});

	it("the airport can have sunny weather", function(){
		airport.stormy();
		airport.sunny();
		expect(airport.isSunny).toBe(true);
	});

	it("the airport cannot hold a plane if the weather is stormy", function(){
		airport.stormy();
		airport.hold(plane);
		expect(airport.planes).toEqual([]);
	});

	it("the airport cannot release a plane if the weather is stormy", function(){
		airport.hold(plane);
		airport.stormy();
		airport.release(plane);
		expect(airport.planes).toEqual([plane]);
	});

});