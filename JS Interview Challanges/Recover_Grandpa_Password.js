/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 // we need to remove duplicate charcters.
 // for that, we can first take an empty string, save the charcters in itm one by one, if we find any duplication,
 // remove it.

function removeDupeChars(chars){
    let removeDuplicates = ""
    for(let i = 0; i < chars.length;i++) { 
        // checl if the word is found in Duplicates
        if(removeDuplicates.includes(chars[i])) {
            console.log(`Removing Duplicate item: ${chars[i]} `)
        }
        else
        {
            removeDuplicates += chars[i]
        }
    }
    console.log(`Password was: ${password}`)
    return removeDuplicates
}

console.log(`GrandPas's Password Is: ${removeDupeChars(password)}`);
console.log(removeDupeChars("aabbccb1212"));