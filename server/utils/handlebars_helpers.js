const moment = require("moment");

const timeFormat = function (date, format){
    console.log({date}, {format})
    var mmnt = moment(date);
    return mmnt.format(format);
};

module.exports = {
    timeFormat
} 