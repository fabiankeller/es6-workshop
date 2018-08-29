// @formatter:off
jest.autoMockOff();

describe('Template Literal', () => {
  describe('Object Literal', () => {
    it('can use shorthand for property names', () => {

      createMonster = (name, power) => {

        //Using NEW Object Literal Syntax, return a literal that will allow the tests to pass
        return {
          type: 'Monster',
          name,
          power,
          attack(target){
            console.log('RAAAARRRR!!! #breathesfire');
            return `${this.name} attacked ${target.name}`;
          }
        };
      };

      const godzilla = createMonster("Godzilla", 1000);
      const mechaGodzilla = createMonster("MechaGodzilla", 5000);

      expect(godzilla.name).toBe("Godzilla");
      expect(godzilla.power).toBe(1000);
      expect(godzilla.attack(mechaGodzilla)).toBe('Godzilla attacked MechaGodzilla');
    });

  });

  describe('String Interpolation', () => {
    it('can use expression interpolation with strings', () => {

      const customer = { name: "Foo" };
      const product = { amount: 7, product: "Bar", price: 42 };

      expect(`Hello ${customer.name}, want to buy ${product.amount} ${product.product} for a total of ${product.amount * product.price} bucks?`)
          .toBe(`Hello Foo, want to buy 7 Bar for a total of 294 bucks?`);
    });
  });
});