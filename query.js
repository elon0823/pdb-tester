const ABCIHandler = require('./abci_request');

class Query {

    makeData({start, end, ownerId, qualifier}) {

        return `{"start":${start},"end":${end},"ownerId":"${ownerId}", "qualifier":"${qualifier}"}`;
    }
}

module.exports = Query;
