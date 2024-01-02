"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDate = void 0;
class MyDate {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printFormat() {
        return `${this.day}/${this.month}/${this.year}`;
    }
    add(amount, type) {
        if (type === 'days') {
            this.day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            this.year += amount;
        }
    }
}
exports.MyDate = MyDate;
const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
