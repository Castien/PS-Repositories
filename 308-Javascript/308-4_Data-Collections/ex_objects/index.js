
// Array
const car = ['red', 300, 2003];

console.log(car[0]);
console.log(car[1]);
console.log(car[2]);

// Object
const myCar = {
    color: 'Blue',
    hp: 400,
    year: 2005,
    isElectric: false,
    availableTrims: ['lx', 'ex', 'xl'],
    engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	},
    printCarInfo: function(){
        console.log(`This car color is ${this.color}`);
    }
}

console.log(myCar);

const someKey = 'year';

console.log(myCar["color"]);
console.log(myCar["availableTrims"]);
console.log(myCar.isElectric);
console.log(myCar.engine.cylinder);

console.log(myCar[someKey]);

console.log(myCar.availableTrims[2]);

myCar.hp = 500;
console.log(myCar);

myCar.color = 'Hot Pink';
console.log(myCar);

delete myCar.isElectric;

console.log(myCar);

for (let key in myCar) {
    console.log(myCar[key]);
}

console.log(myCar.engine.size);

// calling a method 
myCar.printCarInfo();


const user1 = {
    name: 'Bob',
    isAdmin: true,
    role: 'IT',
    password: 'password1234'
}

const user2 = {
    name: 'Mark',
    isAdmin: false,
    role: 'UX Design'
}

const users = [];
users.push(user1);
users.push(user2);


console.log(users);


if (user1.isAdmin && user1.name === 'Bob') {
    console.log(`User: ${user1.name} is an Admin`);
}

if (user1.password === "password234") {
    console.log('Login');
} else {
    console.log('Wrong Password');
}
