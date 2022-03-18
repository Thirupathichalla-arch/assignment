const schedule = require('node-schedule');
let arr = [
    {
        "text": "textOne",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textTwo",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textThree",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textFour",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textFive",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textSix",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textSeven",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textEight",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textNine",
        "dateTime": "*/7 * * * * *"
    },
    {
        "text": "textTen",
        "dateTime": "*/7 * * * * *"
    },
]
let i = 0;
let j = 0;
let date = arr[j].dateTime;
const job = schedule.scheduleJob(date, function () {
     if (i == 9) {
        schedule.cancelJob(job)
    }
    var str = '';
    let syr=""
    str += arr[i].text;
    i++;
    for (let i = str.length - 1; i >= 0; i--){
        syr+=str[i]
    }
    console.log(syr);
})
j++; 


