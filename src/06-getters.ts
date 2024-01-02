export class MyDate{

    constructor(
        public year: number = 1993,
        public month: number = 7, 
        private _day: number=9 // El guion sirve para quitar errores por el get deabajo
        ){}

    printFormat():string{
        const day=this.addPadding(this._day);
        const month=this.addPadding(this.month);

        return `${day}/${month}/${this.year}`;

    }

    private addPadding(value: number){
        // Al ser private solo la clase interna puede acceder al metodo
        if (value<10){
            return `0${value}`;
        }return `${value}`
    }


    add(amount: number,type:'days'|'months'|'years'){
        if(type === 'days'){
            this._day+=amount;
        }
        if(type === 'months'){
            this.month+=amount;
        }
        if(type === 'years'){
            this.year+=amount;
        }
    }
    get day(){
        //code
        return this._day
    }
    get isLeapYear(): boolean{ 
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0; 
    }

    // get myReturn(){ // Todos los getters retornan algo

    // }
    // get myReturn():void{ // Todos los getters retornan algo
    //     // Un void no retorna nada, asi que pone problema
    // }
}

const myDate=new MyDate(1993,7,10)
console.log(myDate.printFormat());
//console.log(myDate.getDay());
// myDate.day=12  // No puedo ni acceder ni modificar
console.log(myDate.day); // Esto es un getter
//myDate.day=2323 // No se puede modificar 
console.log('1993',myDate.isLeapYear);

const myDate2=new MyDate(2000,7,10)
console.log('2000',myDate2.isLeapYear);

const myDate3=new MyDate(2001,7,10)
console.log('2001',myDate3.isLeapYear);

const myDate4=new MyDate(2004,7,10)
console.log('2004',myDate4.isLeapYear);