Object.assign() allows us to merge properties from two or more objects into a new object:
Object.assign({}, user, newUser)
However, this is not very intuitive or readable. A cleaner way of doing this is to use the spread operator (...):

const createdUser = { ...user, ...newUser, verified: false };



const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    verified: true 
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
  
  // console.log(Object.assign(user,newUser))
  // console.log(user) // the user is beig overwritten not effective method.
  
  // another method that we have is spread operator.
  
  const createdUser = {...user,...newUser, verified: false}
  console.log(createdUser)
  console.log(user)
  // the user object remains unchanged.
  
  