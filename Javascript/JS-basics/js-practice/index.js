function onFunction(){
    let text=document.getElementById('demo').innerHTML;
    document.getElementById('demo').innerHTML=text.replace('a','hello');
    document.getElementById('demo').innerHTML=text.concat(' ',"having id demo");
}
var myName ="Shahroze Hassan GOndal";
var position= myName.indexOf('Hassan');
console.log(position);
// Search method
console.log(myName.search('Hassan'));
// include method
console.log(myName.includes('Hassan',2));

let firstName = "John";
let lastName = "Doe";
console.log(myName);
console.log(myName[0]);
// slice method
console.log('slice from 2 to 5 ->'+myName.slice(2,5));
// substring method
console.log('slice from 2 onward->'+myName.substring(-3,2));
// object
let person={
    firstName: 'Ali',
    lastName:'Usman',
    age: 30,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(person.fullName());
// Arrow function
hello=(a,b)=>{
    return a*b;
}
// power function
function power(a,b){
    let mul= Math.pow(a,b);
    return mul;
}

let mul=hello(3,4);
// power method
console.log(power(5,2));
console.log(mul);
// Arrays 
const array=["mango","banana","kiwi","peach"];
const array2=[1,2,3]
let txt = "";
// Concatination
let array3=array.concat(array2);
console.log("Array after concatination " + array3);
// array mapping
const arrayMap = array2.map(mapFunction);
console.log(arrayMap);
// function
function mapFunction(value,index,array){
    return value*2;
}
console.log("Array after mapping"+ arrayMap);
// Loop ForEach
array2.forEach(check);
function check(value,index,array){
    console.log(value>2);
}
// Push method
array.push(9);
// Unshift method
array.unshift('apple');
console.log(array);
// Pop method
console.log(array.pop());
let text="";
// For loop
for(let x of array)
{
    text= text + ' ' + x;
}
console.log(text);
text= '';
// for loop
for(let x in array)
{
    text= text + ' ' + x;
}
console.log(text);
text='';
// for loop 
for( let i=0;i<array.length; i++)
{
    text=text+ ' ' + array[i];
}
console.log(text);
// Array Declaration
const numberArray=[3,5,6,7,8,9,0];
// filter method
const over5=numberArray.filter(ageFunction);
// some method
const checkOver6=numberArray.some(everyFunction);
// find method
const findValue=numberArray.find(findFunction);
console.log(findValue);
document.getElementById('demoFilter').innerHTML='Age over 5 : '+over5;
console.log(checkOver6);
// function to return age over 5
function ageFunction(value,index,array){
    return value > 5;
}
// Function for checking if age is over 6
function everyFunction(value,index,array){
    return value > 6;
}
// function to find value
function findFunction(value,index,array){
    return value > 6;
}
// Dates
const d=new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById('date').innerHTML=d;
// Random method
console.log(Math.floor(Math.random() * 11));
let month=new Date().getMonth();
switch(month){
    case 1:
        console.log('february');
        break;
    case 2:
        console.log('March')
        break;
    case 7:
        console.log('This is August')
        break;
    default:
        console.log('not found');
        break;
}
// Sets
let books=new Set(['Physics','Urdu','Math']);
books.add('Pak Study');
console.log(books);
// Error Handling
function tryCatchFunction(){
    const message = document.getElementById("p01");
   message.innerHTML = "";
    let x = document.getElementById("demoTry").value;
    try{
        if(x=='') throw 'is empty';
        if(isNaN(x)) throw ' Not a numnber'
    }
    catch(err){
        message.innerHTML="Input "+ err;
    }
}
// Javascript OOP
const square={
    radius:1,
    location:{
        x:1,
        y:1,
    },
    drove: function(){
        console.log('draw');
    }
}
console.log(square.drove());
square.drove();
// Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
             console.log('drove');
        }
    }
}
const circle=createCircle(1);
circle.draw();
// Constructor Function
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw')
    }
}
const another=new Circle(3);
let obj={ value: 10}
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);

// Arrow Function
const squaret=(number)=>{
    return number * number;
}
console.log(squaret(5));

const jobs=[
    { id:1, isActive: true},
    { id:2, isActive: true},
    { id:3, isActive: false}
]
const active=jobs.filter((jobs)=>{ return jobs.isActive});
console.log(active);
// Objects
let y='';
const myObj={
    name:'Doe',
    age: 30,
    cars: [
        {
            name: 'Ford', models: ["Fiesta", "Focus", "Mustang"]},
        {
            name: 'BMW', models: [320, "X3", "X5"]
        }
    ]
}
for(let i in myObj.cars){
    y+= "<h2>"+myObj.cars[i].name+'</h2>';
    for(let j in myObj.cars[i].models){
        y+=myObj.cars[i].models[j] + '<br>' }
}
document.getElementById('object').innerHTML=y;

const person1 = {
    name: "John",
    age: 30,
    city: "New York",
    language: "Urdu",
    set lang(lang){
        this.language=lang;
    }
  };
  person1.lang='english';
  document.getElementById("object2").innerHTML = person1.language;

  // Constructor Function
  function person2(first,last,age,eye){
    this.firstName=first,
    this.lastName=last,
    this.age=age,
    this.eyeColor=eye
  }
  const myBrother=new person2('Hafiz','Waqas',30,'green');
  console.log(myBrother.eyeColor);

  myBrother.name=function(){
    return this.eyeColor + ' ' + this.eyeColor;
  }
  console.log(myBrother.name);

  // Classes
  class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        const d=new Date();
        return d.getFullYear()-this.year;
    }
  }
  const obj1= new Car('Hafiz',1996);
  const old=obj1.age();
  document.getElementById('car').innerHTML=old;
  console.log(old);
        






  const parent_str="This is hello world";
  const child_str='hello';
  let result=parent_str.includes(child_str);
  if(result==true){
    console.log('Child string is sibstring of parent string');
  }
  else{
    console.log('Child string is not substring of parent string');
  }

  // remove character at specifc position
  let _position=3;
  let str=parent_str.substring(0,_position-1)+ parent_str.substring(_position);
  console.log(str);
