// @formatter:off
jest.autoMockOff();

describe('SETS', () => {

  it('has an add method and a has method', ()=>{

    // Create a new Set
    // add the following numbers to it, using set.add(num): 1, 2, 3

    let mySet = new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(true);
    expect(mySet.has(3)).toBe(true);
    expect(mySet.has(4)).toBe(false);

  });


  it('doesn`t allow duplicates', ()=>{

    // Create a new Set
    // add the following numbers to it, using set.add(num): 1, 1, 1

    let mySet = new Set();
    mySet.add(1);
    mySet.add(1);
    mySet.add(1);

    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(false);
    expect(mySet.has(3)).toBe(false);
    expect(mySet.has(4)).toBe(false);

  });

});

describe('MAPS', () => {

  it('has a set method', ()=>{

    let myMap = new Map();
    myMap.set('name', 'Aaron');

    expect(myMap.get("name")).toBe("Aaron");

  });

  it('can use objects as a key', ()=>{

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    let myMap = new Map();
    myMap.set(user, value);

    expect(myMap.has(user)).toBe(true);
    expect(myMap.get(user)).toBe(value);

  });

  // calls to `map.get` are not working. leave commented out.
  //xit('doesn\'t coerce keys', ()=>{
  //
  //  let myMap = new Map();
  //  myMap.set(1, 'Aaron');
  //  expect(myMap.get('1')).toBe(false);
  //  myMap.set("1", 'Aaron');
  //  expect(myMap.get('1')).toBe(true);
  //
  //});

});