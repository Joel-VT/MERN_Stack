const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


// AFTER ES6
const { password } = person;
const [firstAnimal, secondAnimal] = animals;
console.log(password);
// => bob@marley.com
console.log(firstAnimal + " " + secondAnimal);
// => horse

// const { email, password } = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;

// const password = '12345';
// const { password: hashedPassword } = person;copy

const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { addresses: [x, y] } = person1;
console.log(x, y)

const { addresses: [, { zipcode }] } = person1;
console.log(zipcode);
// => Londoncopy

// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const [firstAnimal, secondAnimal] = animals;
// const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
// otherAnimals
// => ['fish', 'cat', 'bird']

// const { firstName, lastName, ...attributes } = person;
// const personCopy = { ...person };

// const personCopy = { ...person };
// personCopy === person
// => false
// personCopy.addresses === person.addresses
// => true

// 
const sayHello = name => console.log(`Hello ${name}`);
sayHello("joel");

const objLongHand = () => {
    return {
        name: "joel",
        age: 24
    };
}
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
console.log(objLongHand().age)


class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
}

// Refactored
// class Deck {
//     constructor() {
//       ...
//         suits.forEach(suit => {
//             faces.forEach(face => {
//                 deck.push(this.createCard(suit, face));
//             });
//         });
//     }
// }


// Call Back Functions
function parentFunction(callback) {
    callback("information from the parent function");
}


parentFunction(function(message){
    console.log(message);
});