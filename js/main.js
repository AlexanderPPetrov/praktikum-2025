import { sum, multiply, URL } from "./math"
import * as math from "./math"

import example from "./default-export"

console.log(math.URL)

console.log(example())

console.log(sum(3,5))
console.log(multiply(2,3))
console.log(URL)



//Spread operator

const array1 = [1,2,3]
const array2 = [4,5,6]

const newArray = [...array1, ...array2] //[1,2,3,4,5,6]

const obj1 = {a: 1, b: 2}

//Destructuring
const { b } = obj1
console.log(b)

const jsonOb = {
    name: "ivan"
}

const { name } = jsonOb

console.log(name)


function someFunction () {

    const test = () => {
        console.log('a')
    }

    const anotherTest = () => {
        console.log('b')
    }

    return {
        test,
        anotherTest,
    }
}

const { anotherTest } = someFunction()
console.log(anotherTest())

const array3 = [1,2,3]
const [firstParam, secondParam] = array3
console.log(firstParam, secondParam)




const anotherObject = {
    person: "Ivan",
    address: "ul. Ulica 21"
}

//Add new key:value pair
anotherObject.newProperty = 1
//Remove key:value pair
delete anotherObject.newProperty

Object.keys(anotherObject) // ['person', 'address']
Object.values(anotherObject) // ['Ivan', 'ul. Ulica 21']
Object.entries(anotherObject) // [['person', 'Ivan'], ['address', 'ul. Ulica 21']]








const obj2 = {c:3, d: 4}
const newObj = {...obj1, ...obj2} // {a: 1, b: 2, c: 3, d: 4}
const clonedObj = {...obj1}








const myName = "Tralala"
const myLastName = "Petrov"

const person = {
    firstName: myName,
    lastName: myLastName,
    address: "ul. Bla 21A",
    age: 40,
    cards: ["1", "2", {
        a: 1,
        b: 2,
    }]
}

console.log(person.firstName, person.lastName)

const myFirstArray = [1,2,3,4,5,6,7,8,9]

function logArray(array) {
    array.forEach((value, index)=> {
        console.log(value, index)
    })

    return 5
}

const result = logArray(myFirstArray)
console.log(result)


const logArray2 = (array) => {

}

const logArray3 = function(array) {
 
}

const isChecked = true;
checkSomething(isChecked)

function checkSomething(isChecked) {
    if(isChecked) {
        console.log('tralala')
        return
    }
    console.log('blabla')
}

const isOld = defineIsOld(60)

console.log(isOld)

function defineIsOld(age) {
    // if(age >= 70) {
    //     return true
    // }
    // return false

    return age >= 70
}


const a = 10 < 30 ? 1 : 2

window.tralala = 1
console.log(window.tralala)
console.log(window)



const tralala = {
    asd: 1, 
    bbfg: 2,
}


const { asd } = tralala
const asd2 = tralala.asd
const asd3 = tralala["asd"]

console.log(asd)


const tralala2 = [1,2,3,4]

const [_,__,thirdElement] = tralala2

const thirdElement2 = tralala2[2]


console.log(thirdElement)



function exampleFunction() {
    return [() => {},() => {}]
}

const [functionName, functionName2] = exampleFunction()

functionName()













