"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDate = void 0;
const date = new Date();
date.getHours;
date.getTime();
date.toISOString;
const date2 = new Date(1993, 1, 12); // 0 es enero, el 1 es febrero
date2.getHours;
date2.getTime();
date2.toISOString;
console.log(date);
console.log(date2);
let myVar;
class MyDate {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
exports.MyDate = MyDate;
const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
