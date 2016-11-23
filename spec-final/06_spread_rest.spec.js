// @formatter:off
jest.autoMockOff();

describe('Rest Parameters', () => {

  it('catch non-specified params', () => {

    function resty(first, second, ...others){
      return others;
    }

    //expect(resty().length).toBe(/*ENTER YOUR GUESS HERE */);
    //expect(resty(1).length).toBe(/*ENTER YOUR GUESS HERE */);
    //expect(resty(1,2).length).toBe(/*ENTER YOUR GUESS HERE */);
    //expect(resty(1,2,3).length).toBe(/*ENTER YOUR GUESS HERE */);
    //expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(/*ENTER YOUR GUESS HERE */);

    expect(resty().length).toBe(0);
    expect(resty(1).length).toBe(0);
    expect(resty(1,2).length).toBe(0);
    expect(resty(1,2,3).length).toBe(1);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(8);
  });

  it('has a different length than `arguments`', () => {

    function resty(first, second, ...others){
      return others.length == arguments.length;
    }

    expect(resty()).toBe(true);
    expect(resty(1)).toBe(false);
    expect(resty(1,2)).toBe(false);
    expect(resty(1,2,3)).toBe(false);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(false);
  });

  it('is an actual array, unlike arguments', () => {

    function resty(...args){
      return args;
    }

    function argy(){
      return arguments;
    }

    var args = argy(1,2,3);
    var rests = resty(1,2,3);

    expect(args.__proto__ == rests.__proto__).toBe(false);
    expect(args.splice).toBeUndefined();

    expect(rests.__proto__).toEqual(Array.prototype);
    expect(rests.splice).toBeDefined();
    expect(rests.splice).toEqual(Array.prototype.splice);
  });

});
