jest.autoMockOff();

import fs from 'fs';

describe('GENERATORS', () => {

  xit('make async look sync', () => {
      function run (generatorFunc) {
          let it = generatorFunc(next);

          function next (err, result) {
              if (err) return it.throw(err);
              it.next(result);
          }

          next();  
      }
      
      run(function* (done) {
          var specs = yield fs.readdir('spec', done);
          console.log(specs);
      });
      
  });

});