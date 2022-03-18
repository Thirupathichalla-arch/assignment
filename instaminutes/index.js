const schedule = require('node-schedule');

let data = [
    { 
        "text": "textOne", 
        "dateTime": "2020,07,15,15,00,00"
    },
    { 
        "text": "textTwo", 
        "dateTime": "2020,07,15,14,00,00"
    },
    { 
        "text": "textThree", 
        "dateTime": "2020,07,15,15,00,00"
    }
]
//console.log(data[0].text)
let rule = new schedule.RecurrenceRule();
data.forEach((e) => {
    let d = e.dateTime.split(",");
        rule.second = d[5],
        rule.minute = d[4],
        rule.hour = d[3],
        rule.date = d[2],
        rule.month = d[1],
        rule.year = d[0];
  
})
    //console.log(rule)
const job = schedule.scheduleJob(rule, function () {
    data.forEach((e) => {
         console.log(e.text)
     })
 })
