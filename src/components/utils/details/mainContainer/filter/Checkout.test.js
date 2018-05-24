
const fs = require('../../../functions');

describe('Checkout', () => {
  test('Should check url', () => {
     const link = fs.link;
     fs.cartLink('/end');
     expect(link).toEqual(['/api', '/end']);
   })
})

