// console.log("hello word");
// console.log("hello word");
// console.log("hello word");
// var vawd=12;
// console.log(vawd)
// console.log(vawd)
// consol
// /////////////////////////////////////
// let num = [1,2,3,4,5,10] ;
// var sum = 0;
// for (i=0;i<num.length;i++){
//     sum= sum + num[i];
// }

// console.log(sum)
// const person =
// {
//     name : "Abc" ,
//     abc: 123 ,
//     xyz: 'zxy'
// }

//  for (let key in person){
//  console.log(key,":",person[key]);

//  }
//  ///////////////////

//  ////////////

//  //////////////////////////////////////////////////////////////
//  ///destructuring

//  //////////////////////////
//  ////////////////////////////////////////////////////////////////////

//  const users = [
//     {userID: 1 , name :"abc" , gender : "male"},
//     {userID: 2 , name : "lmn" , gender : "male"},
//     {userID: 3 , name : "xyz" , gender : "female"}
//  ]
//  const [{name}, ,{gender}]= users;
//  console.log(users)

// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////
// /

// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// /////block scope and function scope //////////////////////////
// ///////const and let are block scope /////////// var is function scoped

//     const abc = 9000 ;
// {
//     const abc = 123;
//     var  lmo = " xyz";
// }
// console.log(abc);
// console.log(lmo);
// ///////////////////////////////////////////////////////////////////////////////////

// /////////////deafault parameters
// function addtwo(a, b =0){               //// by default b is assigned zero///
//     return a + b ;
// }
// const ans = addtwo(3) ;
// console.log(ans)

// /////////////////////////////////////////////
// /////////rest parameter/////
//  function myFunc(a,b,...c){
//     console.log( `a is ${a}`);
//     console.log( `b is ${b}`);
//     console.log( `c is ${c}`);
//  }
//  myFunc(1,2,3,4, 5, 6, 7 );

// //////////////////////////////////////////////////////

// /////////

// function sum (num1,num2){
//     return num1 + num2;
// }
// abc = sum(4,5)
// //  console.log(abc)
// document.getElementById("xzc").innerHTML = abc;

// /////////////////////////////////////////////////////
// ///////////

// ///////// SORT()//////////////

// const num = [200,3,40,500,6000,700,0800000];

// const newnum = num.slice(0).sort((a,b)=> b-a)

// console.log(num)
// console.log(newnum)

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// //////////// find method ///////////////

// const users = [
// {userID : 1 , username : "lmnopq"},
// {userID : 2 , username : "lmnopq"},
// {userID : 3 , username : "lmnopq"},
// {userID : 4 , username : "lmnopq"},
// {userID : 5 , username : "lmnopq"},
// ]
// const abc = users.find((user)=>user.userID===3)
// console.log(abc)
// /////////////////////////////////////////////////////////////////////////////
// ////////////////////////

// ///////////every method //////////////////////// gives a boolean ans , checks every element

// const num = [1,2,3,4,5,6,7]

// const res =  num.every((num)=>num%2===0);
// console.log(res)

// /////////////////////////////////////some method ////////////////////' gives a boolean ans ,checks whether any of the given element satisfies the given condition

// ////////////fill method /////// fills agiven value ito the array a specified num odf times

// /////////splice method ///////// (start, delete , insert )

// /////////////////////////sets ////////////////////////
// ////// store data , elements should be unique cannot be duplicate elements / no index based access
// /// order is not guarenteed

// ////////////////////////////////////////////
// ///switch method ///////////////

// let day = 0;
// switch(day) {
//     case 0 : console.log("s") ;
//     break;
//     case  1 :  console.log("m");
//     break;
//     case 2: console.log("t");
//     break;
//     case 3: console.log("w");
//     break;
//     case 4: console.log("th");
//     break;
//     default :
//     console.log(undefined)
// }

// ///////////////////////////////////////
// /////////// while looop  /.......///////////

// let i = 0;
// while (i<=9) {
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i} `);

// //////////////////////////////////////////////////
// ///////////// while loop eg ; ////////////

// let num =10 ;
//  let i= 0;
// let  total = 0
// while (i<=10){
// total= total + i ;
// i++;
// }
// console.log(total);

// //////////////////////////
// //////for loop .///////////

// for (let i=0; i<=9;i++){
//     console.log(i)
// }

// /////////////////////////////////////////////
// //// for loop eg /////////

// let total = 0
// for (i=0;i<=10;i++){
//     total = total+ i ;

// }
// console.log(total);

// ///////////////////////////////////////////
//       //// do while loop ////////

//       let i=10
//       do {
//         console.log(i)
//         i++;

//       }
//       while (i<=9);

// //////////////////////////////// /
// /////////////////    array destructuring /////

//  const myArray= ["value 1", "value 2","value 3", "value 4"];
//  let[ myvar1,myvar2,,myvar3 ] =myArray;
//  console.log("value of myvar1 is", myvar1)
//  console.log("value of myvar2 is" ,myvar2)
//  console.log("value of myvar3 is", myvar3)

// /////////////
//  ////////////   computed properties ////////

//  const key1 = "objkey1";
//  const key2 = "objkey2";

//  const value1 = "myvalue1";
//  const value2 = "myvalue2";

//  const obj = {
//     [key1] : value1,
//     [key2] : value2
//  }
//  console.log(obj)

// ///    or /////////

// const obj = { }
// obj[key1]= value1
// obj[key2]= value2
// console.log (obj)

// //spread

//  const array1 = [1, 2, 3];
//  const array2 = [4, 5, 6];
// //  const newArray = [...array1, ...array2];
// const newArray =[..."123456789"];
//  console.log(newArray)
//  /////////////////

//  const obj1 = {
//         key1 : "value1",
//         key2 : "value2"
//  }

//  const obj2= {
//     key3 : "value3",
//     key4 : "value4"
// }
// const newObject= {..."abc"}   ////////////
// // const newObject= {...obj1,...obj2}
// console.log(newObject)

// //////////////////////////
// /////////////   object destructure\ing /  //////////

// const info = {
//     bandName:"onerepublic",
//     song : "counting stars",
//     year : 2020,
//     abc : "xcz"
// }
// let {bandName,song,...rest}= info;
// console.log(info);

// ////////////////////////////////////////////////////////////////

// ////////////
// ///////////         function

// function abc (){
//     console.log(1+2);
// }

// abc();
// abc();
// abc();
// abc();
// abc();
// abc();
// abc();
// abc();
// abc();
// abc();

// function sum (num1,num2){
//     return num1 + num2;
// }
// abc = sum(4,5)
// console.log(abc)

// function isEven(num){
// return num % 2===0;
// }

// console.log(isEven(4)
// )
// / or using arrow funciton as below //

// const isEven=(num)=>{
//    return num % 2=== 0;
// }
// console.log(isEven(5))

// //////////////////////////
// //////function expression

// const abc = function () {
//     console.log("aaaaaaaaaaaa")
// }
// abc();

// ////arrow function/////////

// const abc =  () => {
//     console.log("aaaaaaaaaaaa")
// }
// abc();

// //////////////hoisting///////////// u can call before the func

//  hello()
// function hello() {
//     console.log("hello world")
// }
// ////////////////////////////
// ///////

// ///  callback functions ////

// function myFunc2(b){
//   console.log("inside2");
// }
// function myFunc(a){
//   console.log("inside1");

// }

// myFunc(myFunc2);

// //////////   /////
//    /////////     imp array method
// //// 1 forEach loop    ////////
// const num = [2,3,4,5,6,7];

// function mul2(number, index){
//     console.log("index is", index)
//     console.log(number*2)
// }

// for (let i = 0 ; i < num.length;i++){
//     mul2(num[i] , i);}
// ///////     / or  /      ////////////
//   num.forEach(mul2)

// const qwert =[
//     {fname: "abc", age:1 },
//     {fname: "asd", age:1 },
//     {fname: "axzx", age:1 },
// ]
// qwert.forEach(function(qwe){
//     console.log(qwe.fname, qwe.age)
// })
// ///////////////////

// //////////// 2) map method    //////////////

// const num = [2,3,4,5,6,7];
// function square (number)
// {
//     return number * number

// }
// const numsquare = num.map(square)
// console.log(numsquare);

// /////////////////////////////
// /////////////////////////////////// 3 filter method

// const num = [2,3,4,5,6,7,8];

// const isODD = (number)=>{return number%2===1}
// const oddnum   = num.filter(isODD)
// console.log(oddnum)

// /////////////////////////////////////
// //   reduce method  ///////

// const numbers = [1,2,3,4,5]

// const sum= numbers.reduce(function (accumulator,currentvalue){
//   return accumulator + currentvalue;

//  }, 0) // accumulator initial value
//  console.log(sum);

// //     reduce eg //////

// const usercart  = [

// {user1 : 1, product: "123" , price: 10000},
// {user2 : 2, product: "234" , price: 15000},
// {user2 : 3, product: "345" , price: 25000}
// ];

// const total = usercart.reduce((totalPrice,currentprice)=>
// {
//    return totalPrice+currentprice.price;
// }
// ,0)
// console.log(total)

// /////////////
// /////////////

// //          sort method   /////

// Num = [1200,45,5,20,300 ];
// Num.sort();
// console.log(Num);

// /////  map //////////

// const person = {
//    id: 1,
//    firstName: "abcd"
// }
// const userInfo = new Map();
// userInfo.set(person, {age:3,gender: "male"});
// console.log(userInfo)
// console.log(userInfo.get(person).age)
// /////////////

// ////   methods  ////

// //////////////  this ////////

// function xyz (){
//    console.log (`first name of the person is ${this.firstName} and their id is ${this.id} `)}
// const person = {
//       id: 1,
//       firstName: "abcd",
//       about :xyz
//    }
// const person2 = {
//       id: 2,
//       firstName: "lmno",
//       about :xyz

//    }
// const person3 = {
//       id: 3,
//       firstName: "efgh",
//       about :xyz

//    }
//  person.about();

// /////////  switch  /////////

// let day = 4;
// switch (day) {
//   case 0:
//     console.log("s");
//     break;
//   case 1:
//     console.log("m");
//     break;
//   case 2:
//     console.log("t");
//     break;
//   case 3:
//     console.log("w");
//     break;
//   case 4:
//     console.log("th");
//     break;
//     default:
//       console.log("undefined");
// }

/////////////////////imp array method
/////////// 1 forEach loop ////////////////
// const num = [2,3,4,5,6,7];

// function mul2(number, index){
//     console.log("index is", index)
//     console.log(number*2)
// }

// for (let i = 0 ; i < num.length;i++){
//     mul2(num[i] , i);}
//////////////or/////////////
//   num.forEach(mul2)

// const qwert =[
//     {fname: "abc", age:1 },
//     {fname: "asd", age:1 },
//     {fname: "axzx", age:1 },
// ]
// qwert.forEach(function(qwe){
//     console.log(qwe.fname, qwe.age)
// })
/////////////////////

////////////// 2 map method//////////////

// const num = [2,3,4,5,6,7];
// function square (number)
// {
//     return number * number

// }
// const numsquare = num.map(square)
// console.log(numsquare);

///////////////////////////////
///////////////////////////////////// 3 filter method

// const num = [2,3,4,5,6,7,8];

// const isEven = (number)=>{return number%2===0}
// const evennum = num.filter(isEven)
// console.log(evennum)

/////////////////////////////////////////

/////////// SORT()//////////////

// const num = [200,3,40,500,6000,700,0800000];

// const newnum = num.slice(0).sort((a,b)=> b-a)

// console.log(num)
// console.log(newnum)

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////// find method ///////////////

// const users = [
// {userID : 1 , username : "lmnopq"},
// {userID : 2 , username : "lmnopq"},
// {userID : 3 , username : "lmnopq"},
// {userID : 4 , username : "lmnopq"},
// {userID : 5 , username : "lmnopq"},
// ]
// const abc = users.find((user)=>user.userID===3)
// console.log(abc)
///////////////////////////////////////////////////////////////////////////////
//////////////////////////

/////////////every method //////////////////////// gives a boolean ans , checks every element

// const num = [1,2,3,4,5,6,7]

// const res =  num.every((num)=>num%2===0);
// console.log(res)

///////////////////////////////////////some method ////////////////////' gives a boolean ans ,checks whether any of the given element satisfies the given condition

//////////////fill method /////// fills agiven value ito the array a specified num odf times

///////////splice method ///////// (start, delete , insert )

///////////////////////////sets ////////////////////////
//////// store data , elements should be unique cannot be duplicate elements / no index based access
///// order is not guarenteed

//////////////////////////////////////////////
// ///switch method ///////////////

// let day = '0';
// switch(day) {
//     case 0 : console.log("s") ;
//     break;
//     case  1 :  console.log("m");
//     break;
//     case 2: console.log("t");
//     break;
//     case 3: console.log("w");
//     break;
//     case 4: console.log("th");
//     break;
//     default :
//     console.log(undefined)
// }

///////////////////////   part 2  //////////

// console.log(this);

///////////////////////////// event listener ////////

// const allButton=document.querySelectorAll("button");
// console.log(allButton)
// // firstButton.addEventListener("click",()=>{
// // console.log("you clicked 1st button ")
// // })
// for(let button of allButton){
//     button.addEventListener("click",function(){console.log(this.textContent)})
// }
// console.log(this)

///////////  practice with click events ////

// const allButtons=document.querySelectorAll(".my-buttons button ");
// // console.log(allButtons.length)
// // allButtons.forEach(button =>{
// //     button.addEventListener("click",(e)=>{
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color ="grey";
// //         e.target.style.weight = "80"
// //     })
// // })

// // ////////////  ex 2 ///
// document.addEventListener("DOMContentLoaded", () => {
// const button = document.querySelector("button");
// button.addEventListener("click",(e)=>{
//     e.target.style.backgroundColor="red";
// });
// });

// //////////////

/////     asynchronous javascript    //////

// set timeout///

// console.log("start");
// setTimeout(()=>{
//     console.log("inside timeout");
// }, 1000);
// console.log("end");

// set interval  ////

// console.log("start");
// setInterval(()=>{
//     console.log(Math.random());
// },2000);
// console.log("end");
// stop;

// ////// callbacks ////

// function myFunc() {
//   console.log("adad");
// }
// function myFunc2() {
//   console.log("bzbzb");
// }

// const head1 = document.getElementsByClassName(heading1);
// head1.textContent;

////

function changeText(element, text, color, time) {
  setTimeout(() => {
    element.textContent = text;
  });
}
