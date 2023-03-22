let contact = {
    firstName: 'K',
    lastName: 'Subramanyeshwara',
    email: 'subramanyeshwarak@gmail.com',
    phone: '6366648993',
    address: {
        building: '05',
        street: '1st Street',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India'
    }
}

console.log(contact);

//accessing the perticular value of the object
console.log(contact.firstName, contact.lastName);
console.log(contact.email);

//if you try to get the values of the property dosen't exist, you will get "undefined"
console.log(contact.age);