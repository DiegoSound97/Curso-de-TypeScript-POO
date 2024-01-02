export class Animal{
    // si le pongo privado no deja mover desde afuera
    // Si le pongo protected es un privado con herencia
    constructor(protected name:string){}
        move(){
            console.log('moving along!');
            }
        greeting (){
            return `Hello, I'm ${this.name}`;
        }
        protected doSomething(){
            console.log('dooo');
            
        }
    }

    export class Dog extends Animal{

        // extender propiedades 
        
        constructor(
            name: string,
            public owner: string
        ){
            super(name);
        }
        woof(times: number): void{
            for (let index = 0; index < times; index++) {
                console.log(`Woof! ${this.name}`);
            }
            this.doSomething();
        }

        move(){
            //code
            console.log('moving as a dog');
            super.move();
            
        }
    }

   
    const cheis = new Dog('cheis','Nico');
    //cheis.name='otro Nombre'
    cheis.woof(1);
    //cheis.doSomething();
    cheis.move()
    