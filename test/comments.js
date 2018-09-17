
describe('Comments', () => {
    describe('POST', () => {
        it('Requested body should contain ID of movie already present in database');
        it('Requested body should comment text body');
        it('Comments should be saved to app database and returned in request response');
    })
    describe('GET' , () => {
        it('Should fetch list of all comments present in application database');
        it('Should allow filtering comments by associated movie, by passing its ID');
    })
});