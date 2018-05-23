let account = require('../utils/functions');

describe('Testing account methods', () => {
    afterEach(function() {
        account.user = [];
        account.colorToggle1 = 'Green';
        account.colorToggle2 = 'Green';
        account.colorToggle3 = 'Green';
        account.colorToggle4 = 'Green';
    })

    test('handle change with val username should change value to red', () => {
        account.handleChange('username');
        expect(account.colorToggle1).toEqual('Red')
    })
    test('handle change with val address should change value to red', () => {
        account.handleChange('address');
        expect(account.colorToggle2).toEqual('Red')
    })
    test('handle change with val phoneNumber should change value to red', () => {
        account.handleChange('phoneNumber');
        expect(account.colorToggle3).toEqual('Red')
    })
    test('handle change with val email should change value to red', () => {
        account.handleChange('email');
        expect(account.colorToggle4).toEqual('Red')
    })
    test('handle change with val email should change value to Green', () => {
        account.handleChange('username');
        expect(account.colorToggle4).toEqual('Green')
    })
})