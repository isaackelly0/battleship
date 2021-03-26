import Ship from './Ship';
test("Returns an object", ()=>{
    const tester = Ship("Submarine", [1,2,3]);
    expect(tester.name).toEqual("Submarine");
    expect(tester.size.length).toEqual(3);
})
test("Make sure returned object's methods work", ()=> {
    const tester = Ship("Boat", [1,2]);
    tester.hit(1);
    expect(tester.damaged[0]).toEqual(1);
    expect(tester.isSunk()).toEqual(false) 
    tester.hit(2)
    expect(tester.isSunk()).toEqual(true)
})
test("two cases", ()=>{
    const cruiser = Ship("Cruiser", [1,2,3])
    const carrier = Ship("Carrier", [1,2,3,4,5])
    cruiser.hit(1)
    expect(cruiser.damaged[0]).toEqual(1)
    expect(carrier.damaged[0]).toEqual(undefined)
})