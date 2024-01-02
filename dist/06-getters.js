"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDate = void 0;
class MyDate {
    constructor(year = 1993, month = 7, _day = 9 // El guion sirve para quitar errores por el get deabajo
    ) {
        this.year = year;
        this.month = month;
        this._day = _day;
    }
    printFormat() {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }
    addPadding(value) {
        // Al ser private solo la clase interna puede acceder al metodo
        if (value < 10) {
            return `0${value}`;
        }
        return `${value}`;
    }
    add(amount, type) {
        if (type === 'days') {
            this._day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            this.year += amount;
        }
    }
    get day() {
        //code
        return this._day;
    }
    get isLeapYear() {
        if (this.year % 400 === 0)
            return true;
        if (this.year % 100 === 0)
            return false;
        return this.year % 4 === 0;
    }
}
exports.MyDate = MyDate;
const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
//console.log(myDate.getDay());
// myDate.day=12  // No puedo ni acceder ni modificar
console.log(myDate.day); // Esto es un getter
//myDate.day=2323 // No se puede modificar 
console.log('1993', myDate.isLeapYear);
const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);
const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);
const myDate4 = new MyDate(2004, 7, 10);
console.log('2004', myDate4.isLeapYear);
