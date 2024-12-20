import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/

let users = []

function transformData(data) { 

        data.map(persons => {
            let FullName = persons.name.first + " " + persons.name.last
            let DateofBirth = new Date(persons.dob.date.toString())
            DateofBirth = DateofBirth.toDateString()
            
            // pushing data into the users array.
            // Note when we use .map and try to use Object.append()
            // We will overwrite every element that will not work. So we make users an array instead o object.

            users.push({name:FullName,Dob:DateofBirth})
        })

        return users

}

console.log(transformData(userData))