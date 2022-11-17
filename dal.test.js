const {users, accountInfo} = require('./dal.js');

test('accountInfo', () => {
    if (users != null){
        expect(accountInfo('angel@hotmail.com')).toEqual({name: 'Angel'});
    }
});