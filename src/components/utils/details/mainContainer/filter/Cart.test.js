
const fs = require('../../../functions');

describe('Users', () => {
  test('The cart should be empty array', () => {
    let users = fs.user;
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toEqual(0);
  });
})

describe('total', () => {
  test('Check total', () => {
    let total = fs.total;
    expect(total).toBe(100);
  });
})