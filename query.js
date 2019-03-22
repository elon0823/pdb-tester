const ABCIHandler = require('./abci_request');

class Query {

    constructor() {
        this.startTime = 1;
        this.endTime = 2;
        this.ownerId = "";
        this.qualifier = "";
        this.abci_handler = new ABCIHandler();
        this.method = "abci_query";
        this.path = "/query";
    }
    makeData() {
        return `{"start":${this.startTime},"end":${this.endTime},"ownerId":"${this.ownerId}", "qualifier":"${this.qualifier}"}`;
    }
    setData({start, end, ownerId, qualifier}) {
        this.startTime = start;
        this.endTime = end;
        this.ownerId = ownerId;
        this.qualifier = qualifier;

        return this;
    }
    setStartTime(start) {
        this.startTime = start;
        return this;
    }
    setEndTime(end) {
        this.endTime = end;
        return this;
    }
    setOwnerId(ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    setQualifier(qualifier) {
        this.qualifier = qualifier;
        return this;
    }

    query(callback) {
        let data = this.makeData();
        this.abci_handler.sendData(this.method, this.path, data, callback);
    }
}

module.exports = Query;
