// //Creation of arrays Using Objects ..

// let numbers = [1,10,2,67];
// console.log('Arrays -> '+numbers);
// // Insertion in array ... 
// // At Last Index.. 
// numbers.push(9);
// console.log('Insertion at last index -> ' +numbers);
// // Insertion at first index .. 
// numbers.unshift(0);
// console.log('Insertion at first index -> ' +numbers);
// // At middle of array ...
// // Here 2 is insertion after index number..
// // 0 is number to delete, here none .. 
// // then insert the calue you want ... 
// numbers.splice(2,0,'a','b', 'c');
// console.log("Insertion of elements in middle of array -> " + numbers);



// Finding or Searching the element .. 
// let numbers = [3,1,4,6];
// console.log(numbers);
// console.log('1 is present at Index -> ' + numbers.indexOf(1));
// // If number not present it will throw -1 ... 

//  // if we want to check that entered number is present in array or not .. 
//  if(numbers.indexOf(1) != -1)
//     console.log('present');

//  // best approach ..
//  // return true or false ...  
//  console.log(numbers.includes(1));
//  // or 
//  console.log(numbers.includes(5));

//  // advance approach .. 
//  // checks from defined index to specified index .. 
// console.log(numbers.indexOf(1,2));



// Creation of Arraya as Reference .. 

// let courses=[
//     {no:1, naam:'Amandeep'},
//     {no:2, naam: 'Rahul'},
//     {no:3, naam:'Tripti'}
// ];
// console.log(courses);
//console.log(courses.indexOf({n0:1, naame:'Amandeep'}));
// Using call back funtion .. 
// let course = courses.find(function(course)
// {
//     return course.naam === 'Amandeep';
// })
// console.log(course);

// if not found it will return undefined ... 

// By using arrow function it can be optimized .. 
// let course = courses.find(course => course.naam === 'Amandeep');
// console.log(course);


// Removing element in Array ...
// end -> pop();
// first -> shift(;
// middle -> slice(3, 1,);
// let numbers = [1,2,3,4,5,6,7];
// console.log(numbers);
// // Deleting last element .. 
// numbers.pop();
// console.log('Deleting Last element -> '+numbers);
// // Deleting first elemtent .. 
// numbers.shift();
// console.log('First element is removed '+ numbers);

// // Now deleting the middle element in the array .. 
// numbers.splice(2,1);
// console.log('Deleting the index 2 element present in array (4)-> '+numbers);




// ////////Empting  elements in array ..................
// let numbers = [12,42,131,53];
// let number2 = numbers;
// // numbers=[];
// numbers2.length = 0;
// console.log(numbers2);


// Combining and slicing array .. 
// concat -> used to combine .. 
// slice -> is used to slice .. 


// let a = [1,2,3,5,6,7];
// console.log(a);
// // 2 is starting index and 3 is ending index .. 
// let sliced = a.slice(2,5);
// console.log('Sliced array is -> '+sliced);



// combing using spread operator .. 
// let first = [1,2,4];
// let second = [4,5,6];
// let combined = [...first, 'a', ...second, true];
// console.log('Combined array is -> '+combined);



// Iterating an array ...................
// using for-of loop 
// let arr=[12,34,56,76];
// for(let value of arr){
//     console.log('Iteration using for-of loop -> '+value);
// }
// // now by using for-each loop


// let arr2=[23,435,76342];
// arr2.forEach()
// arr2.forEach(function(number)
// {
//     console.log('Iteration using for-each loop -> '+number);
// });



// Now converting it to arrow function ..
// let arr=[12,34,12,1245];
// arr.forEach(number=>console.log(number));


// Joining array ..........
// let numbers = [12,34,5623,12];
// const joined = numbers.join(',');
// console.log(joined);


// split method for arrays .. 
// let message = 'This is my first method ';
// let parts = message.split(' ');
// console.log(parts);


// ................sorting arrays.................
// by using sort method ... 
// let numbers= [12,10,4,41];
// numbers.sort();
// console.log('Sorted array is '+numbers);
// numbers.reverse();
// console.log("Reversed Number is "+numbers);


// ...............Filtering the values .. ... 
// let numbers = [1,4,-1, -5];
// let filtered = numbers.filter(value =>value >= 0);
// console.log('Filtered Value is -> '+filtered);


// Mapping each element of arrays ..
// let numbers = [1,24,4521,12];
// let items = numbers.map(function(value)
// {
//     return 'student_no'+value;
// })
// console.log(items);


// maping with objects .. 
// let numbers = [1,24,4521,12];
// let items = numbers.map(value =>  'student_no'+value);
// console.log('Mapping using objects .. '+items);


// ............Chaining .... 
// let numbers = [1,2,4,-1,34,-9];
// let items = numbers
// .filter(value => value >= 0)
// .map(num => {value: num});
// console.log(items);


// ..........Functions ..........
// function run(){
//     console.log('running');
// }
// // function call 
// run();
//  /// /// Hoisting is the process in which all the function are moved at top of program file 
//  // done by js engine .. ......
 
//  // function assignment ... 
// let stand = function walk(){
//     console.log('walking');
//  };
//  stand();


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2,4,5));
// /// Special object in JS 
// // Argument all the unused parameter inside function goes in argument section.. 
// let ans = sum(1,2);

// ...............Creating dynamic function .. 
// function sum(a,b){
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }
// // here n numbers of parameters can be given .. 
// let ans = sum(1,2,4,5,10);
// console.log(ans);



///// .........Rest Operator .........
// function sum (...args)
// {
//     console.log(args);
// }
// // prints as array in sequence ... .. 
// sum(1,2,4,5,6);

// // rest paramnter must be last paramenter inside function 
// function sum (num,value,...args)
// {
//     console.log(args);
// }
// // prints as array in sequence ... .. 
// sum(1,2,4,5,6);


// // default parameter ...
// //  r = 5 is default parameter is not eneterd by user ..  
// // after starting parameter all the right side of paramters must be default .. 
// // (p,r=5,y) will not work ... 
// function interest(p,r=5,y=10){
//     return p*r*y/100;
// }
// // when any of below entered parameter is not given by userr then we use default parameter .... 
// console.log(interest(100, 10));



///   ....     Getter and Setter .... 

// getter -> for accesssing the properties ... 
// setter -> for changing or matate properties ... 
// let person = {
//     fName: 'Amandeep',
//     lName: 'Mishra'
// };
// function fullName()
// {
//     return `${person.fName} ${person.lName}`; 
// }
// // read only function ... 
// console.log(fullName());

// Using getter ... 
// let person = {
//         fName: 'Amandeep',
//         lName: 'Mishra',
//         get fullName()
//     {
//         return `${person.fName} ${person.lName}`; 
//     }

//     };
//     // read only function ... 
//     console.log(fullName());

//USING SETTER ... 
// let person = {
//     fName: 'Amandeep',
//     lName: 'Mishra',
//     get fullName()
// {
//     return `${person.fName} ${person.lName}`; 
// },

//     set fullName (value)
// {
//     let parts = value.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];
// }
// };
// // read only function ... 
// console.log(person.fullName);



// .........Try and Catch Block............
// let person = {
//     fName: 'Amandeep',
//     lName: 'Mishra',
//     get fullName()
// {
//     return `${person.fName} ${person.lName}`; 
// },

//     set fullName (value)
//     {
//         if(typeof value != String){
//             throw new Error("You have not sent a string"); 
//         }
//     let parts = value.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];
// }
// };
// try{
//     person.fullName = true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);


///                Scope of variable .. 
// let defines the scope only to defined block
// var is used to define global variable ..
// var b = 10; 
// {
//     let a = 5;
//     console.log(a);
// }
// console.log(b);

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// if(true){
//     var a =5;
// }
// console.log(a);

// function a(){
//     const ab= 5;
// }
// const ab = 5;
// function b(){
//     const ab = 5;
// }
// console.log(ab);


// ..................Reducing and array.....
// let arr = [1,2,4,5];
// let total = 0;
// for(let value of arr)
//     total = total + value;
// console.log(total);

// using reduce method .. 
let arr = [1,2,4,5,6];
let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Printing total sum : ");
console.log(totalSum);