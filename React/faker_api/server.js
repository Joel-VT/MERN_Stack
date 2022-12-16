const { faker } =  require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email(this.firstName,this.lastName);
        this.password = faker.internet.password(15);
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this. address = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json( newUser );
});

app.get("/api/company/new", (req, res) => {
    const newCompany = new Company();
    res.json( newCompany );
});

app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json( {User: newUser, Company: newCompany} );
});


const server = app.listen(port, () => 
    console.log(`Server is locked and loaded on port ${port}!`)
);

