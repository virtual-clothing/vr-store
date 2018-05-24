
const fs = require('../../../functions');

describe('Sizes will toggle', () => {
  test('should toggle size', () => {
     const size = fs.red;
     fs.toggleSize(fs.xs, true);
     expect(size).toEqual(false);
   })
})

