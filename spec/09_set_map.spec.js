// @formatter:off
jest.autoMockOff();

describe('SETS', () => {

  xit('has an add method and a has method', ()=>{

    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set


    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(true);
    expect(mySet.has(3)).toBe(true);
    expect(mySet.has(4)).toBe(false);

  });


  xit('doesn`t allow duplicates', ()=>{

    // Create a new Set called 'mySet'
    // add the number 1 to it three times



    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(false);
    expect(mySet.has(3)).toBe(false);
    expect(mySet.has(4)).toBe(false);

  });

});

describe('MAPS', () => {

  xit('has a set method', ()=>{

    // Create a new map called 'myMap'
    // add a new entry. Use "name" as the key and "Aaron" as the value


    expect(myMap.get("name")).toBe("Aaron");

  });

  xit('can use objects as a key', ()=>{

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    // Create a map called 'myMap'
    // add a new entry. Use user as the key, and value as the value


    expect(myMap.has(user)).toBe(true);
    expect(myMap.get(user)).toBe(value);

  });

});