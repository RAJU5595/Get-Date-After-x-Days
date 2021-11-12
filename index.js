const addDays = require("date-fns/addDays");
let format = require("date-fns/format");
function addingDays(days) {
  let newDate = addDays(new Date(2020, 7, 22), days);
  newDate = format(newDate, "dd-MM-yyyy");
  return newDate;
}
console.log(addingDays(10));
module.exports = addingDays;
