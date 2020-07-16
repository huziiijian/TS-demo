// js写法
let num: number = 25;
// number/boolean/string/any(不允许)

// 重新赋值
// num = 12.3 => ok
// num = "12.3" => err

// ts原型
// let num = 25; 等同于 let num: number = 25;

// 数组 元祖 枚举
// 数组
let names: Array<string> = ['herry', 'Marry'];
// 等同于 let names: string[] = ['herry','Marry'];
names[2] = 'Lorry'
// 元祖
let colors: [string, number] = ['herry', 3];
// 枚举 enum
enum Color {
    Black,
    Yellow = 100,
    Red
}
console.log(Color)
let myColor: Color = Color.Red;
console.log(myColor)


// 参数类型
function fun1(): string {
    return 'fun1'
}
function fun2(): void {
}
function fun3(arg1: number, arg2: string): string {
    return arg1 + arg2;
}
console.log(fun3(2, 'g'))
// 函数类型
let func: (a: number, b: string) => string;
func = fun3;
console.log(func(5, "f"))

// Object & type
let dataObj: { name: string, age: number } = {
    name: 'wang',
    age: 31
}
// 重新对属性名赋值是不被允许的，但可以更改属性值
dataObj = {
    name: 'hu',
    age: 24
};
// 复杂对象类型
let complex1: { data: number[], func: (item: number) => number[] } = {
    data: [1, 2, 3],
    func: function (item: number): number[] {
        return [...this.data, item]; // 注意这里的this指向complex1,根据需要灵活使用
    }
}
console.log(complex1.func(4));
// type生成类型 
// MyType中func: (item: number) => number[] 这种写法也行
type MyType = { data: number[], func(item: number): number[] }
let complex2: MyType = {
    data: [1, 2, 3], // 无论是定义类型还是写函数都可以采用箭头函数的写法
    func: (item: number): number[] => [...[], item] // 注意这里的this指向window
}
console.log(complex2.func(4));
// union type 可选择类型
let unionType: number | string | boolean = 12;
unionType = '12';
unionType = false;

// never https://juejin.im/post/5e9457486fb9a03c8b4c08bc
let x: never;
// // 报错会阻止程序进行，所以进行注释
// // 1. 应用在抛出异常
// function error(message:string): never {
//     throw new Error(message)
// }
// // 2. 死循环
// function loop(): never {
//     while (true){}
// }
// // never类型可以赋值给number之类的类型
// let y: number;
// y = (()=>{
//     throw new Error('message')
// })()


// 类
class Person {
    name: string = 'hu';
    protected gender: string = 'man'; // 当前类或者被继承的子类中使用
    private _age: number = 27; // 习惯添加下划线
    constructor(name: string, public username: string) { // 外界传入的变量
        this.name = name;
        this.username = username || name;
    }
    printAge = (age: number): void => {
        this._age = age;
        console.log(this._age);
    }
}
const person = new Person('hu', 'wang')
console.log(person);
person.printAge(25);
// 继承 & 私有
class Student extends Person {
    private _stuId: number = 0;
    // 得到所有public和protected属性
    constructor(name: string, username: string) {
        super(name, username)
    }
    set setId(id: number) { // 注意这里不是方法而是属性
        this._stuId = id
    }
    get getId() {
        return this._stuId
    }
}
const hu = new Student('hu', 'zijian')
console.log(hu)
console.log(hu.getId);
hu.setId = 1; // 用=而不是()
console.log(hu.getId);


// 命名空间
namespace Counter { // 利用export导出后即可访问
    const PI: number = 3.14;
    export const sumValue = (num1: number, num2: number): number => num1 + num2;
    const minus = (num1: number, num2: number): number => num1 - num2;
    export namespace Const {
        export const firstNum: number = 32;
    }
}
console.log(Counter.sumValue(10, 20));
console.log(Counter.Const.firstNum)


// 接口
// 和type很相似，但interface可以继承，type不能
interface Person1 {
    name: string;
    age: number, // , & ;都可以
    sex?: string; // 可以选择不传入
    readonly salary: number;// 只读，不可修改
    [propName: string]: any;// 属性任意取(可以不存在)，只要是字符串变量即可
    greet(arg: void): void;
}
let person1: Person1 = {
    name: 'hu',
    age: 30,
    salary: 3000,
    anyName: '' || 2 || false,
    greet() {
        console.log('hello everyone');
    }
}
console.log(person1)
person1.greet();

function printPerson(person: Person1) {
    console.log(
        `I am ${person.name},my age is ${person.age},salary is ${person.salary}`
    )
}
printPerson(person1)

interface Student1 {
    id: number;
    course: string;
}
class People implements Person1, Student1 {
    name: string = 'wang';
    age: number = 50;
    salary: number = 1000;
    id: number = 101;
    course: string = 'math';
    greet() {
        console.log('hello');
    }
}
interface Employee extends Person1 {
    // 接口也可以继承
    work: string;
}
const employee: Employee = {
    name: 'li',
    work: 'fontend',
    age: 43,
    salary: 10000,
    greet() {
        console.log('hello employee')
    }
}
console.log(employee)


// 泛型
// 对应function写法
// function identify <T>(arg: T){ return arg }
const identify = <T>(arg: T): T => arg; // 不一定要字母T表示
// 在调用的时候指定类型传入
console.log(identify(20));
console.log(identify('20'));
console.log(identify<number>(30));
// console.log(identify<number>('30')); error

// 接口中使用泛型
// interface GenericIdentify {
//     <T>(arg: T): T;
// }
interface GenericIdentify<T> { // 将泛型定义提升
    (arg: T): T;
}
let myIdentify: GenericIdentify<number | string> = identify;
// console.log(myIdentify<string>('string'))
console.log(myIdentify('string'))
console.log(myIdentify(321))
// 添加泛型约束
// 必须拥有length属性，值为any类型
function getLength<T extends { length: any }>(obj: T): any {
    return obj;
}
const obj = {
    name: 'he',
    age: 17,
    length: 2 // 如果没有length会报错
}
function getLength1<T extends number>(obj: T): any {
    return obj;
}
const obj1 = 3
console.log(getLength1(obj1))

// 类中应用泛型
class CoutNumber<T>{
    number1: T;
    number2: T;
    constructor(num1: T, num2: T) {
        this.number1 = num1;
        this.number2 = num2;
    }
    calculate = (num: number): number => {
        console.log(this); // 这里指向CoutNumber类
        // 如果采用传统方式申明方法，则this指向实例化的对象
        // return this.number1 + this.number2 + num; // 注意这样实现不了运算
        return +this.number1 * +this.number2 + num; // 增加+让js实现默认Number类型转换
    }
}
const countNumber1 = new CoutNumber(1, 2);
const countNumber2 = new CoutNumber('1', '2');
console.log(countNumber1.calculate(3))
console.log(countNumber2.calculate(3))


export default colors;
