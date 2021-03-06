const ABCIHandler = require('./abci_request');
const Uint64BE = require("int64-buffer").Uint64BE;
const Util = require("./util");

class Query {

    constructor() {
        this.startTime = 1;
        this.endTime = 2;
        this.ownerId = "";
        this.qualifier = "";
        this.abci_handler = new ABCIHandler();
        this.method = "abci_query";
        this.path = "/query";
        this.result = {};
    }
    makeData() {
        return `{"start":${this.startTime},"end":${this.endTime},"ownerId":"${this.ownerId}", "qualifier":"${this.qualifier}"}`;
    }
    setData({start, end, ownerId, qualifier}) {
        this.startTime = new Uint64BE(start);
        this.endTime = new Uint64BE(end);
        this.ownerId = ownerId;
        this.qualifier = Util.encodeBase64(qualifier);

        return this;
    }
    setStartTime(start) {
        this.startTime = new Uint64BE(start);
        return this;
    }
    setEndTime(end) {
        this.endTime = new Uint64BE(end);
        return this;
    }
    setOwnerId(ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    setQualifier(qualifier) {
        this.qualifier = Util.encodeBase64(qualifier);
        return this;
    }

    query(callback) {
        let data = this.makeData();
        this.abci_handler.sendData(this.method, this.path, data, this.result, callback);
    }
}

module.exports = Query;
