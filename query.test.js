const ABCIHandler = require('./abci_request');
const Query = require('./query');
const Util = require('./util');

describe('PaustDB Query Test', () => {

    const query = new Query();

    describe("Range Query Test", () => {

        test('has data between 1-2544772882435375000', done => {

            var callback = function(data) {
                let error = data.error;
                console.log(data);
                let res = data.data;

                expect(error).toEqual(false);
                done();
            };
            query.setStartTime(1).setEndTime(2544772882435375000).query(callback);

        });
        describe("Range Between ", () => {
        });
    });

});
