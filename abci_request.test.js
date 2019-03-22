const ABCIHandler = require('./abci_request');
const Query = require('./query');


describe('ABCI request test', () => {

    describe("simple Query Test", () => {

        const query = new Query();

        test('can query to server', done => {

            var callback = function(data) {
                let error = data.error;
                expect(error).toEqual(false);
                done();
            };
            query.setStartTime(1).setEndTime(2).query(callback);

        });
        describe("Range Between ", () => {
        });
    });

});
