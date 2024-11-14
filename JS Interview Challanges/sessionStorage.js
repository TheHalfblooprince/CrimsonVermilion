sessionStorage.setItem("theme","Dark")

const Person = {
    name: "Muhammad Wasi ul haq",
    age: 34
}


sessionStorage.setItem("person", JSON.stringify(Person))

const personData = JSON.parse(sessionStorage.getItem("person"))

console.log(personData)