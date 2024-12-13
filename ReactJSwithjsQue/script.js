const person = {
    name : "john",
    age :"20",
    city : "London"
}

const {name,age,city}= person;

const array1 = [10,230,503,809];
const firstItem = array1[0];
const secondItem = array1[1];

const [a,,c,d,e] = array1;
console.log(a);
console.log(c);