const addon = require(".");

(async function () {
  let result = await addon.add(1, 2);

  console.log(result);
})();
