let topicsArray = [
    "尚為開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);