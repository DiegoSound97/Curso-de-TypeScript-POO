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
        const day = this.addPadding(this.day);
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
            this.day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            this.year += amount;
        }
    }
    getDay() {
        return this.day;
    }
}
exports.MyDate = MyDate;
const myDate = new MyDate(1993, 7, 10);
// No se puede ni imprimir, ni modificar
console.log(myDate.printFormat());
console.log(myDate.getDay());
