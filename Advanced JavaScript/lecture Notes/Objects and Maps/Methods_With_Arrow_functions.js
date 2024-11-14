// Arrow functions allow us to use a function inside another function: ```js askToFriend() {
//     setTimeout(() => {
//       console.log(`Would you like to friend ${this.username}?`); 
//     }, 2000);  
//     } ```



const userData = { 
    username: "Reed",
    title: "JavaScript Programmer",
    getBio: () => {
      console.log(`User ${this.username} is a ${this.title}`);
    },
    askToFriend() {
      setTimeout(() => {
        console.log(`Would you like to friend ${this.username}?`);   
      }, 2000);  
    } 
  }
  
  // console.log(this);
  
  userData.getBio();