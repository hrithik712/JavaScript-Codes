// call by reference ... 
// let a ={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a)
// console.log(a.value);


// for inloop 
// let rectangle={
//     length:2,
//     breadth:3
// };
// for(let key in rectangle)
// {
//     // keys are reflected through key variables.. 
//     console.log(key, rectangle[key]);
// } 


// //for of loop
// for(let key of Object.entries (rectangle))
// {
//     console.log(key);
// }



// let rectangle={
//     length:2,
//     breadth:5
// };
// if('color' in rectangle)
//     {
//         console.log('Present');
//     }
//  else{
//     console.log('Absent');
//  }   



// Object Cloning Method - 2... 
// let src = {
//     a:10,
//     b:20,
//     c:112
// };
// let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// Using Assign cloning 
// object 2 ;; 
// let src = {
//     a:12,
//     b:34
// };
// let dest = Object.assign({}, src);
// console.log(dest);
// src.a++;
// console.log(dest);


// Object Cloning Method -3 
//  
// let src = {
//     a:12,
//     b:34,
//     c:21
// };
// let dest = {...src};
// console.log(dest);
// src.a++;
// console.log(dest);

