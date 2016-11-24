// @formatter:off
jest.autoMockOff();

describe('Rest Parameters', () => {

  xit('catch non-specified params', () => {

    function resty(first, second, ...others){
      return others;
    }

    expect(resty().length).toBe(/*ENTER YOUR GUESS HERE */);
    expect(resty(1).length).toBe(/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2).length).toBe(/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2,3).length).toBe(/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(/*ENTER YOUR GUESS HERE */);

  });

  xit('has a different length than `arguments`', () => {

    function resty(first, second, ...others){
      return others.length == arguments.length;
    }

    expect(resty()).toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1)).toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2)).toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2,3)).toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(/*ENTER YOUR GUESS HERE*/);
  });
});