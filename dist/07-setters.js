"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDate = void 0;
class MyDate {
    constructor(year = 1993, _month = 7, _day = 9 // El guion sirve para quitar errores por el get deabajo
    ) {
        this.year = year;
        this._month = _month;
        this._day = _day;
    }
    printFormat() {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
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
            this._month += amount;
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
    get month() {
        return this._month;
    }
    set month(newValue) {
        // No puedo retornar
        // Por definicion es un metodo Void
        if (newValue >= 1 && newValue <= 12) {
            this._month = newValue;
        }
        else {
            throw ('month out of range');
        }
    }
}
exports.MyDate = MyDate;
const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78;
console.log('esto no debe aparecer', myDate.month);
//console.log(myDate.getDay());
