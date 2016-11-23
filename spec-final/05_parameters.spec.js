// @formatter:off
jest.autoMockOff();

describe('Default Values', () => {
    it('can be triggered when the incoming argument is undefined', () => {

        function test(name = "Mercury") {
            return name;
        }

        //expect(test("Aaron"))   .toBe(/*ENTER YOUR GUESS HERE*/);
        //expect(test())          .toBe(/*ENTER YOUR GUESS HERE*/);
        //expect(test(undefined)) .toBe(/*ENTER YOUR GUESS HERE*/);
        //expect(test(null))      .toBe(/*ENTER YOUR GUESS HERE*/);

        expect(test("Aaron")).toBe("Aaron");
        expect(test()).toBe("Mercury");
        expect(test(undefined)).toBe("Mercury");
        expect(test(null)).toBe(null);
    });

    it('aren\'t included in arguments', () => {

        function test(name = "Mercury") {
            return arguments.length;
        }

        //expect(test("Aaron"))   .toBe(/*ENTER YOUR GUESS HERE*/);
        //expect(test())          .toBe(/*ENTER YOUR GUESS HERE*/);
        //expect(test(null))      .toBe(/*ENTER YOUR GUESS HERE*/);

        expect(test("Aaron")).toBe(1);
        expect(test()).toBe(0);
    });

    it('can trigger a function call', () => {
        let triggerCount = 0;

        function test(name = getDefault()) {
            return name;
        }

        function getDefault() {
            triggerCount++;
            return 'Mercury';
        }

        //expect(test("Aaron"))   .toBe(/*ENTER YOUR GUESS HERE*/);
        //expect(test())          .toBe(/*ENTER YOUR GUESS HERE*/);
        //expect(test(null))      .toBe(/*ENTER YOUR GUESS HERE*/);

        expect(triggerCount).toBe(0);
        expect(test("Aaron")).toBe("Aaron");
        expect(test()).toBe('Mercury');
        expect(test(undefined)).toBe("Mercury");
        expect(triggerCount).toBe(2);
    });

});