
const fs = require('../../../functions');

describe('Color will toggle', () => {
  test('should toggle color', () => {
     const bool = fs.red;
     fs.toggle(fs.red, true);
     expect(bool).toEqual(false);
   })
})

