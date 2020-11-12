const addon = require(".");

(async function () {
  console.time("Program runtime");
  let result = await addon.add(1, 2);
  console.timeEnd("Program runtime");

  console.log(result);
})();
