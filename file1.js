// console.log("hello word");
// console.log("hello word");
// console.log("hello word");
// var vawd=12;
// console.log(vawd)
// console.log(vawd)
// consol
///////////////////////////////////////
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

//  const key1 = "objkey1";
//  const key2 = "objkey2";

//  const value1 = "myvalue1";
//  const value2 = "myvalue2";

//  const obj = {
//     [key1] : value1,
//     [key2] : value2
//  }
//  console.log(obj)
//////////////
/////spread

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
//  console.log(obj1)
////////////////////////////////////////////////////////////////
/////destructuring

////////////////////////////
//////////////////////////////////////////////////////////////////////

//  const users = [
//     {userID: 1 , name :"abc" , gender : "male"},
//     {userID: 2 , name : "lmn" , gender : "male"},
//     {userID: 3 , name : "xyz" , gender : "female"}
//  ]
//  const [{name}, ,{gender}]= users;
//  console.log(name)
//  console.log(gender)
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
///function

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

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////function expression

// const abc = function () {
//     console.log("aaaaaaaaaaaa")
// }
// abc();

//////arrow function/////////

// const abc =  () => {
//     console.log("aaaaaaaaaaaa")
// }
// abc();

////////////////hoisting///////////// u can call before the func

//  hello()
// function hello() {
//     console.log("hello world")
// }
//////////////////////////////
///////block scope and function scope //////////////////////////
/////////const and let are block scope /////////// var is function scoped

//     const abc = 9000 ;
// {
//     const abc = 123;
//     var  lmo = " xyz";
// }
// console.log(abc);
// console.log(lmo);
/////////////////////////////////////////////////////////////////////////////////////

///////////////deafault parameters
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

////////////////////////////////////////////////////////

///////////

// function sum (num1,num2){
//     return num1 + num2;
// }
// abc = sum(4,5)
// //  console.log(abc)
// document.getElementById("xzc").innerHTML = abc;

///////////////////////////////////////////////////////
/////////////

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

console.log('017==017');
console.log('018==018');

/////////////////////////////

//const firstbutton=Document.queryselector("#one");
//firstbutton.addEventListener("click",()=>{
//    console.log("you clicked 1st button ")
//})//
