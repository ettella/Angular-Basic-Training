"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
