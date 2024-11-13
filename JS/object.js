// let first_name = 'Rutik';
// let last_name = 'Ambhore';
// let mobile = 9876574521;
// let email = 'pratik@gmail.com';

let personDetails = ['Rutik', 'Ambhore', 9876574521, 'rutik@gmail.com'];

// let pDetails = {
//     first_name: 'rutik',
//     last_name: 'ambhore',
//     mobile: 9876574521,
//     email: 'rutik@gmail.com'
// }

let pDetails1 = {
    first_name: 'Pallavi',
    last_name: 'Rahate',
    mobile: 8867861313,
    email: 'pallavi@gmail.com'
}

let users = [
    {
        id: 1,
        first_name: 'rutik',
        last_name: 'ambhore',
        mobile: 9876574521,
        email: 'rutik@gmail.com'
    },
    {
        id: 2,
        first_name: 'Pallavi',
        last_name: 'Rahate',
        mobile: 8867861313,
        email: ['pallavi@gmail.com', 'p.r@gmail.com'],
        address: {
            line1: 'opp abc petrol pump',
            line2: 'near xyz building',
            landmark: 'Some mall',
            city: 'Pune',
            state: 'Maharashtra',
            country: 'India',
            pinCode: '411004'
        }
    }
]

console.log(users.find((u)=> u.id === 1));

// console.log(users[1].email[1]);


// pDetails.first_name = "Rutik"; // get the value of property
// pDetails['last_name'] = "Ambhore"; // changing value of existing property / (update)
// pDetails.address = "Pune";
// pDetails.country = "India"; // adding new property to object

// delete pDetails.country; // deleting property from object
// console.log(personDetails);

// console.log(pDetails);
// console.log(pDetails1);
// console.log(users);
// console.log(pDetails.first_name);
// console.log(pDetails.last_name);
// console.log(pDetails['mobile']);
// console.log(pDetails.email);
