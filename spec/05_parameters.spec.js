// @formatter:off
jest.autoMockOff();

describe('Default Values', () => {
  xit('can be triggered when the incoming argument is undefined', () => {

    function test(name = "Mercury") {
      return name;
    }

    expect(test("Aaron"))   .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test(undefined)) .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test(null))      .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test())          .toBe(/*ENTER YOUR GUESS HERE*/);

  });

  xit('aren\'t included in arguments', () => {

    function test(name = "Mercury") {
      return arguments.length;
    }

    expect(test("Aaron"))   .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test(null))      .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test())          .toBe(/*ENTER YOUR GUESS HERE*/);

  });

  xit('can trigger a function call', () => {
    let triggerCount = 0;

    function test(name = getDefault()) {
      return name;
    }

    function getDefault() {
      triggerCount++;
      return 'Mercury';
    }

    expect(triggerCount)    .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test("Aaron"))   .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test())          .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(test(null))      .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(triggerCount)    .toBe(/*ENTER YOUR GUESS HERE*/);

  });

});