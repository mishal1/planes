describe('Airport', function(){
	var airport, plane ;

	beforeEach(function(){
		airport = new Airport('name');
		plane = new Plane();
		// spyOn(plane, 'new')
		// plane = jasmine.createSpy('New')
	});

	it("should have no planes when initialized", function(){
		expect(airport.planes).toEqual([])
	});

	it("should have a name", function(){
		expect(airport.name).toEqual('name')
	});


	it("should can hold a plane", function(){
		airport.hold(plane)
		expect(airport.planes).toEqual([plane])
	});

	it("can release planes", function(){
		airport.hold(plane)
		airport.release(plane)
		expect(airport.planes).toEqual([])
	});

});

