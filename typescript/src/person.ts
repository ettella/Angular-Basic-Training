import { PersonInterface } from "./person.interface";

export class Person implements PersonInterface {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string{
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}


// let url: string ='dawdaw';
// let randomNum: number = 30;
// let bool: boolean = false;
// let randomObject: any = {};



// let numberArray: number[] = [1,2,34];
// let numberArrayV2: Array<number> = [1,2,34];



// // numberArray.push('asffg');

// function addNumbers(num1: number, num2:number): number {
//     return num1 + num2;
// }

// addNumbers(15, "awd");



// abstract class Animal {
//     weight:number

//     constructor(weight: number) {
//         this.weight = weight;
//     }
// }

// // new Animal() contructor hivása

// class Tiger extends Animal {
    
//     constructor(){
//         super(30);
//     }
// }

















