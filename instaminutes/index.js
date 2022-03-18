const schedule = require('node-schedule');
let i = 0;
let arr = ["one", "two", "three","four","five","six","seven","eight","nine","ten"];
const job = schedule.scheduleJob('*/7 * * * * *', function () {
    if (i == 9) {
        schedule.cancelJob(job);
    }
    console.log(`"text":text${arr[i]}`);
    console.log(`"dateTime":`,new Date())
    i++;
}) 


