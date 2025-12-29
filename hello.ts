const firstname:string ="viaraj";
const age:number = 25;

console.log('my Fist name is '+firstname+' and my age is '+age);


const cars: string[] = ["BMW", "Audi", "Ferrari"];

console.log(cars);


let car: [string, number, boolean];
car = ["BMW", 2020, true];
console.log(car);

let bike :string[] =[];
bike.push("Yamaha");
bike.push("34");

console.log(bike);



type Brand= string;

interface Car {
    brand:Brand;
    model:number;
    year:number;
    isPetrol:boolean;
    country:Country;
}


interface Country{
    name:string;
    code:number;
    codeName:string;
}

const myCar: Car = {
    brand: "Audi",
    model: 2020,
    year: 2020,
    isPetrol: true,
    country:{
        name:"Germany",
        code:49,
        codeName:"DE"
    }
}

console.log(myCar);


interface coloredCar extends Car{
    color:string;
}

const myColoredCar: coloredCar = {
    brand: "Ferrari",
    model: 2021,
    year: 2021,
    isPetrol: true,
    country: {
        name:"Italy",
        code:39,
        codeName:"IT"
    },
    color:"RED"

}

console.log(myColoredCar);

