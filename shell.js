
const Query = require('./query');
var repl = require("repl");
var query = new Query();

repl.start( {
    prompt: 'Paust-db > ',
    replMode: repl.REPL_MODE_STRICT,
    ignoreUndefined: true,
  }).context.query = query;