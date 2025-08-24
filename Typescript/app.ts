/*

//innetation




function addOne(num : number) {
    return num + 1;
}
let result = addOne(5);
console.log(result);
const double = (x : number ,y :number ) => {
    return x * 2 + y * 2;
}
let doubledResult = double(10, 5);
console.log(doubledResult);

const greet = (person = "Anonymous") => {
    return (`Hello, ${person}!`);
}
const res = greet();
console.log(res);

const double = (x :number) : number => {
    return x * 2;
}
const res = double(28);
console.log(res);

function printMessage(message: string): void {
    console.log(`This is my ${message}`);
}
printMessage("Hello Typescript")

//Never
function throwError(message: string): never {
    throw new Error(message);
}
const res = throwError("This is an error Message")


function infiniteLoop(): never {
    while (true) {
        console.log("This will run forever");
    }
}


const numbers : any[] = [1,2,3,4,5,"six",true,null,undefined ];
console.log(numbers);


const items : number[] = []
items.push (45,12);
console.log(items);


const items : Array<string> = [];
items.push("apple", "banana");
console.log(items);


//Multi Dimensional Arrays

const matrix : number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);


const singleDi : number[] = [1,2,3,4,5,6];
const multiDi : number[][] =[
    [1,3,4,5,6,],
    [2,23,4,34,53,45]
];
const mixedDi : (number | string)[][] = [
    [1, "two", 3],
    [4, "five", 6],
    ["seven", 8, "nine"]
];

console.log(singleDi);
console.log(multiDi);
console.log(mixedDi);


//Objects
//type varName (annotation/type) = {property : value}

const person : {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "John Doe",
    age: 25,
    isStudent: false
};
// console.log(person);

function printUser() : {name : string, age : number, isStudents : boolean} {
    return {
        name: "recapped",
        age: 23,
        isStudents: false
    };
}
console.log(printUser());


const userInfo = () :{name: string, age: number, isStudent: boolean} => {
    return {
        name: "John Doe",
        age: 25,
        isStudent: false
    };
};
const user = userInfo();
console.log(user);


//Type Aliases 
type Person = {
    name : string;
    age : number;
};
const printPerson = (person : Person){
    console.log(`Name : ${person.name}, Age : ${person.age}`); 
};
const myPerson : Person = {
    name : "Alice",
    age : 30
};
const anotherPerson : Person ={
    name : "Recapped",
    age :49
}
printPerson(myPerson);
printPerson(anotherPerson);


type User ={
    name : string;
    age : 23;
    location : string;
    email ?: string;
};
const userInfoPrint = (user : User) =>{
        return (`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}, Email: ${user.email}`)
}

const myNewUser : User = {
    name : "Recapped",
    age : 23,
    location : "Earth",
    email : "recapped@example.com"
};
const res = userInfoPrint(myNewUser);
console.log(res);


/// Intersection Type

type Employee = {
    employeeId: number;
    department: string;
};

type Person = {
    name: string;
    age: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "Recapped",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};
console.log(`Name: ${employee.name}, Age: ${employee.age}, Employee ID: ${employee.employeeId}, Department: ${employee.department}`);


/// Unions
type StringOrNumber = string | number;

const printId = (id: StringOrNumber) => {
    if (typeof id === "string") {
        console.log(`String ID: ${id.toUpperCase()}`);
    } else {
        console.log(`Number ID: ${id}`);
    }
};

printId("abc123");
printId(123);



let password : string | number = 20;
type UserInfo = {
    id: number;
    name: string;
    age: number;
};
type AccountDetails = {
    email : string ;
    password : string | number;
};
let user: UserInfo | AccountDetails = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "user@example.com",
    password: "securePassword123"
};
let user2: UserInfo | AccountDetails = {
    id: 2,
    name: "Jane Smith",
    age: 28,
    email: "jane@example.com",
    password: "anotherSecurePassword456"
};

const items : (number | string)[] = [1, "two", 3, "four", 5];
console.log(items);



//Literal Types

let color : "red" | "green" | "blue";
color = "red";
color = "green";
color = "blue";
// color = "yellow"; // Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'.
let number : 1 | 2 | 3;
number = 1;
number = 2;
number = 3;
// number = 4; // Error: Type '4' is not assignable to type '1 | 2 | 3'.    
let isActive : true | false;
isActive = true;
isActive = false;
isActive = null;
// isActive = null; // Error: Type 'null' is not assignable to type 'true | false'.



 ///Tuples
type StringNumberPair = [string, number];
const example: StringNumberPair = ["Hello", 42];
console.log(example);

let myTuple: [string, number, boolean] = ["Recapped", 100, true];
console.log(myTuple);

type anotherTuple = [string, number ];
let anotherTuplePair : anotherTuple =["Recapped", 100];
console.log(anotherTuplePair);


//Enums
enum WeatherConditions {
    Sunny = 0,
    Rainy = 1,
    Cloudy = 2,
    Snowy = 3
}
console.log(`Current weather condition: ${WeatherConditions.Sunny}`); // Output: Current weather condition: 0
console.log(`Current weather condition: ${WeatherConditions.Rainy}`); // Output: Current weather condition: 1
console.log(`Current weather condition: ${WeatherConditions.Cloudy}`); // Output: Current weather condition: 2
console.log(`Current weather condition: ${WeatherConditions.Snowy}`); // Output: Current weather condition: 3   

//Class Properties Annotation
class Person {
    name : string ;
    age : number ;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
};

 class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

        getCarInfo(): string {
            return `${this.year} ${this.make} ${this.model}`;
        }
    }

    const myCar = new Car("Toyota", "Camry", 2020);
    console.log(myCar.getCarInfo());

    

    //Access Modifiers
    class Person {
        private name: string;
        protected age: number;
        public location: string;

        constructor(name: string, age: number, location: string) {
            this.name = name;
            this.age = age;
            this.location = location;
        }

        public getInfo(): string {
            return `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`;
        }
    }

    const person = new Person("John Doe", 30, "USA");
    console.log(person.getInfo());

    

    //Getters and Setters
    class Person {
        private name: string;
        private age: number;
        private location: string;

        constructor(name: string, age: number, location: string) {
            this.name = name;
            this.age = age;
            this.location = location;
        }

        public getName(): string {
            return this.name;
        }

        public setName(name: string): void {
            this.name = name;
        }

        public getAge(): number {
            return this.age;
        }

        public setAge(age: number): void {
            this.age = age;
        }

        public getLocation(): string {
            return this.location;
        }

        public setLocation(location: string): void {
            this.location = location;
        }
    }
    const person = new Person("John Doe", 30, "USA");

    

    class MyClass {
        private _myProperty : number = 5;
        get myProperty() : number {
            return this._myProperty;
        }
        set myProperty(value : number) {
            this._myProperty = value;
        }
    }
    const myInstance = new MyClass();
    console.log(`Current value: ${myInstance.myProperty}`);
    myInstance.myProperty = 10;
    console.log(`Updated value: ${myInstance.myProperty}`);
    

    //InterFace 
    interface Person {
        name: string;
        age: number;
        location: string;
    }

    const printPersonInfo = (person: Person) => {
        console.log(`Name: ${person.name}, Age: ${person.age}, Location: ${person.location}`);
    };

    const person1: Person = {
        name: "Alice",
        age: 30,
        location: "Wonderland"
    };
    const person2: Person = {
        name: "Bob",
        age: 25,
        location: "Builderland"
    };

    printPersonInfo(person1);
    printPersonInfo(person2);

    interface MathOperations {
        (a: number , b: number): number;
    };


    const add: MathOperations = (a, b) => a + b;
    const subtract: MathOperations = (a, b) => a - b;

    console.log(add(5, 3));
    console.log(subtract(5, 3));
    interface Math {
        (x:number , y: number) : number ;
    };
    const addion : Math = (x, y) => x + y;
    const subtruction :Math = (x, y) => x -y;
 console.log(addion(50, 3));
 console.log(subtruction(50, 3));


//Interface for a class
interface Car {
    make: string;
    model: string;
    year: number;
    getCarInfo(): string;
}

class MyCar implements Car {
    constructor(public make: string, public model: string, public year: number) {}

    getCarInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

const myCar = new MyCar("Toyota", "Camry", 2020);
console.log(myCar.getCarInfo());



//Declaration merging
interface Computer {
    name : string;
    ram : number;
    hdd : number;
};
const myComputer : Computer = {
    name: "Core-i7",
    ram: 16,
    hdd: 512
};
let myComputer2 : Computer = {
    name: "Core-i5",
    ram: 8,
    hdd: 256
};
console.log(myComputer);
console.log(myComputer2);

interface Movie {
    name : string;
    rating : number;
    genre ?: string;
};
const myMovie : Movie = {
    name: "Inception",
    rating: 8.8,
    genre: "Sci-Fi"
};
const myMovie2 : Movie = {
    name: "The Matrix",
    rating: 8.7
};
const myMovie3 : Movie = {
    name: "Interstellar",
    rating: 8.6,
    genre: "Sci-Fi"
};
const myMovies : Movie[] = [myMovie, myMovie2, myMovie3];
console.log(myMovies);

interface Games {
    title: string;
    rating: number;
    genre?: string;
}

const myGame: Games = {
    title: "The Legend of Zelda: Breath of the Wild",
    rating: 10,
    genre: "Action-Adventure"
};

const myGame2: Games = {
    title: "Super Mario Odyssey",
    rating: 9.7
};

const myGames: Games[] = [myGame, myGame2];
console.log(myGames);

interface MathOperations {
    (a: number, b: number) : number;

}

const add: MathOperations = (a, b) => a + b;
const subtract: MathOperations = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(5, 3));

interface Song {
    songName: string;
    artist: string;
    duration: number; // duration in seconds
}
const mySong: Song = {
    songName: "Bohemian Rhapsody",
    artist: "Queen",
    duration: 354
};
const printSongInfo = (song: Song) => {
    console.log(`Song: ${song.songName}, Artist: ${song.artist}, Duration: ${song.duration} seconds`);
};

printSongInfo(mySong);

interface Songs {
    songName : string;
    singerName : string; 
    printSongInfo(songName: string, singerName: string): string;
};
const songs1 : Songs ={
    songName : "Imagine",
    singerName : "John Lennon",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName}, Singer: ${singerName}`;
    }
};
console.log(songs1.printSongInfo(songs1.songName, songs1.singerName));

interface MovieDetails {
    title: string;
    director: string;
    year: number;
    printMovieInfo(title: string, director: string, year: number): string | number;
};

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie1: MovieGenre = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    printMovieInfo(title: string, director: string, year: number): string | number {
        return `Title: ${title}, Director: ${director}, Year: ${year}`;
    }    
};
const Movies2 : MovieGenre = {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    printMovieInfo(title: string, director: string, year: number): string | number {
        return `Title: ${title}, Director: ${director}, Year: ${year}`;
    }
};
console.log(movie1.printMovieInfo(movie1.title, movie1.director, movie1.year));
console.log(Movies2.printMovieInfo(Movies2.title, Movies2.director, Movies2.year));


interface Vehicle {
    make: string;
    model: string;
    year: number;
    getVehicleInfo(): string;
}

class Car implements Vehicle {
    constructor(public make: string, public model: string, public year: number) {}

    getVehicleInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Truck implements Vehicle {
    constructor(public make: string, public model: string, public year: number, public payloadCapacity: number) {}

    getVehicleInfo(): string {
        return `${this.year} ${this.make} ${this.model} (Payload Capacity: ${this.payloadCapacity} kg)`;
    }
}

const myCar = new Car("Toyota", "Camry", 2020);
const myTruck = new Truck("Ford", "F-150", 2021, 1000);

console.log(myCar.getVehicleInfo());
console.log(myTruck.getVehicleInfo());

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }
}

class Truck implements Vehicle {
    start(): void {
        console.log("Truck started");
    }

    stop(): void {
        console.log("Truck stopped");
    }
}

const myCar = new Car();
const myTruck = new Truck();

myCar.start();
myCar.stop();

myTruck.start();
myTruck.stop();


//Declaration Merging

interface Car {
    brand: string;
    start(): void;
};
interface Car {
    brand: string;
    start(): void;
};
const myCar : Car = {
    brand: "Toyota",
    start: () => {
        console.log(`${myCar.brand} is starting...`);
    }
    stop: () => {
        console.log(`${myCar.brand} is stopping...`);
        
    };
};
myCar.start();
// myCar.stop();


//Generics
function identity<T>(arg: T): T {
    return arg;
}

let result1 = identity<string>("Hello World");
let result2 = identity<number>(42);
console.log(result1); // Output: Hello World
console.log(result2); // Output: 42

function printNumber (num : number , defaultValue : number) :[number, number] {
    return [num, defaultValue];
};
function printString (str : string , defaultValue : string) :[string, string] {
    return [str, defaultValue];
};
const items = printNumber(1, 2);
console.log(items);

const stringItems = printString("Hello", "World");
console.log(stringItems);

//Generics Function 
function printItems<T>(items: T, defaultValue : T): [T, T] {
    return [items, defaultValue];
};
const items = printItems<string>("Hello", "World");
console.log(items);


function uniqueItems<T>(items: T, defaultValue: T): [T, T] {
    return [items, defaultValue];
}
const res = uniqueItems<number>(5, 10);
console.log(res);

function uniqueDataTypeFunc<Type>(items: Type, defaultValue: Type): [Type, Type] {
    return [items, defaultValue];
};

interface Dog{
    name: string;
    breed: string;
    age: number;
}
const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3
};
const dogInfo = uniqueDataTypeFunc<Dog>(myDog , myDog);
console.log(dogInfo);

function getRandomKeyValuePair<T extends object>(obj: T): [keyof T, T[keyof T]] {
    const keys = Object.keys(obj) as Array<keyof T>;
    if (keys.length === 0) {
        throw new Error("Object has no keys");
    }
    const randomKey = keys[Math.floor(Math.random() * keys.length)] as keyof T;
    return [randomKey, obj[randomKey]];
}
const sampleObject = {
    name: "Alice",
    city: "Wonderland",
};
const randomKeyValue = getRandomKeyValuePair<any>(sampleObject);
console.log(randomKeyValue);


function filterArray<T>(array: T[], condition: (item: T)=> boolean): T[] {
    return array.filter((item) => condition(item));
};
const numberArray = [1, 2, 3, 4, 5];
const filteredNumbers = filterArray<number>(numberArray, (num) => num > 2);
console.log(filteredNumbers);
const stringArray = ["apple", "banana", "cherry","amm"];
const filteredStrings = filterArray<string>(stringArray, (str) => str.length > 5);
console.log(filteredStrings);

interface Fruit {
    name: string;
    color: string;
};
const FruitArray: Fruit[] = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
];

const filteredFruits = filterArray<Fruit>(FruitArray, (fruit) => fruit.color === "Red");
console.log(filteredFruits);

//Generics Class
class Box<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const stringBox = new Box<string>();
stringBox.addItem("Hello");
stringBox.addItem("World");
console.log(stringBox.getItems());

const numberBox = new Box<number>();
numberBox.addItem(42);
numberBox.addItem(100);
console.log(numberBox.getItems());


//Type Narrowing

function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(`String ID: ${id.toUpperCase()}`);
    } else {
        console.log(`Number ID: ${id}`);
    }
}

printId("abc123");
printId(123);


//Type guards
function isString(value: string | number): value is string {
    return typeof value === "string";
}

function printId(id: string | number) {
    if (isString(id)) {
        console.log(`String ID: ${id.toUpperCase()}`);
    } else {
        console.log(`Number ID: ${id}`);
    }
}

printId("abc123");
printId(123);

//the instanceof operator
function printDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(`Date: ${date.toISOString()}`);
    } else {
        console.log(`Date String: ${date}`);
    }
}

printDate(new Date());
printDate("2023-01-01");

//Intersection types
type User = {
    id: number;
    name: string;
};

type Admin = {
    role: string;
};

type AdminUser = User & Admin;

const adminUser: AdminUser = {
    id: 1,
    name: "Alice",
    role: "Administrator"
};
console.log(adminUser);
*/

