const ABCIHandler = require('./abci_request');
const Query = require('./query');


describe('PaustDB Test Set', () => {

    const abci_handler = new ABCIHandler();

    describe("Query Test", () => {

        const QUERYMETHOD = "abci_query";
        const QUERYPATH = "/query";
        const query = new Query();

        test('can query object', done => {
            let queryData = query.makeData({start: 1,end: 2,ownerId: "",qualifier: ""});

            var callback = function(data) {
                let error = data.error;
                expect(error).toEqual(false);
                done();
            };
            abci_handler.sendData(QUERYMETHOD, QUERYPATH, queryData, callback);

        });
        describe("Range Between ", () => {
        });
    });

});
