const ABCIHandler = require('./abci_request');
const Query = require('./query');
const Util = require('./util');

describe('PaustDB Query Test', () => {

    let query;

    beforeEach(() => {
        query = new Query();
    });


    //Range Query
    describe("Range Query All Range", () => {

        test('has data between 1-2544772882435375000', done => {

            var callback = function(data) {
                let error = data.error;
                let res = data.data;

                expect(error).toBe(false);
                expect(data.data.length).toEqual(4);
                done();

            };
            query.setStartTime(1).setEndTime("2544772882435375000").query(callback);

        });
    });

    describe("Range Query Each Gap 1 nano sec", () => {

        test('has data between 1544772882435375000-1544772882435375001', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;

                expect(error).toBe(false);
                expect(data.data.length).toEqual(1);
                done();
            };
            query.setStartTime("1544772882435375000").setEndTime("1544772882435375001").query(callback);
            
        });

        test('has data between 1544772960049177000-1544772960049177001', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;

                expect(error).toBe(false);
                expect(data.data.length).toEqual(1);
                done();
            };
            query.setStartTime("1544772960049177000").setEndTime("1544772960049177001").query(callback);

        });

        test('has data between 1544772967331458000-1544772967331458001', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;

                expect(error).toBe(false);
                expect(data.data.length).toEqual(1);
                done();
            };
            query.setStartTime("1544772967331458000").setEndTime("1544772967331458001").query(callback);

        });
    });

    describe("Range Query Between all range", () => {

        test('has ordered result', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;

                expect(data.data.length).toEqual(4);
                done();
            };
            query.setStartTime("1").setEndTime("2544772882435375000").query(callback);

        });
    });

    //OwnerID query
    describe("OwnerID with 'owner1' Between all range", () => {

        test('has one item', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;

                expect(data.data.length).toEqual(1);
                done();
            };
            query.setStartTime("1").setEndTime("2544772882435375000").setOwnerId('owner1').query(callback);

        });
    });
    describe("OwnerID with 'owner2' Between all range", () => {

        test('has one item', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;
                
                expect(data.data.length).toEqual(2);
                done();
            };
            query.setStartTime("1").setEndTime("2544772882435375000").setOwnerId('owner2').query(callback);

        });
    });
    describe("OwnerID with 'owner3' Between all range", () => {

        test('has one item', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;

                expect(data.data.length).toEqual(1);
                done();
            };
            query.setStartTime("1").setEndTime("2544772882435375000").setOwnerId('owner3').query(callback);

        });
    });

    // qualifier query
    describe("Qualifier with {type: temperature} Between all range", () => {

        test('has one item', done => {

            var callback = function(data) {

                let error = data.error;
                let res = data.data;

                expect(data.data.length).toEqual(1);
                done();
            };
            query.setStartTime("1").setEndTime("2544772882435375000").setQualifier("{\"type\":\"temperature\"}").query(callback);

        });
    });

});
