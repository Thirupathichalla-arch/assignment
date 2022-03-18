const cron =require("node-cron");
let arr = [
    {
        text: "textOne",
        dateTime: new Date("May 14, 2024 16:57:00"),
    },
    {
        text: "textTwo",
        dateTime: new Date("May 16, 2024 21:53:00"),
    },
    {
        text: "textThree",
        dateTime: new Date("March 18, 2022 18:35:00"),
    },
    {
        text: "textFour",
        dateTime: new Date("March 18, 2022 18:35:09"),
    },
    {
        text: "textFive",
        dateTime: new Date("May 12, 2024 16:53:02"),
    },
    {
        text: "textSix",
        dateTime: new Date("May 14, 2024 16:53:00"),
    },
    {
        text: "textSeven",
        dateTime: new Date("May 14, 2024 16:53:30"),
    },
    {
        text: "textEight",
        dateTime: new Date("May 14, 2024 16:28:05"),
    },
    {
        text: "textNine",
        dateTime: new Date("May 14, 2024 16:20:02"),
    },
    {
        text: "textTen",
        dateTime: new Date("May 14, 2024 16:00:00"),
    },
]
arr.forEach((e) => {
//console.log(e.dateTime)
    let [second, minute, hour, Month, month, Week] = [
    e.dateTime.getSeconds() + e.text.length,
    e.dateTime.getMinutes(),
    e.dateTime.getHours(),
    e.dateTime.getDate(),
    e.dateTime.getMonth() + 1,
    e.dateTime.getDay(),
    ];
    //console.log(`${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`)
    cron.schedule(
        `${second} ${minute} ${hour} ${Month} ${month} ${Week}`,
        () => {
            fun(e.text);
        }
    )
});

function fun(text) {
    console.log(text.split("").reverse().join(''));
}
