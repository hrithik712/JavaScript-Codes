console.log('lets start');
// object creation 
const rectangle={
    length:5,
    breadth:4,

    draw: function(){
        console.log('draw');
    }
};
rectangle.draw();
console.log(rectangle);


// factory function;;
function createRectangle(){
    let rectangle={
        length:5,
        breadth:4,
    
        draw: function(){
            console.log('draw');
        }
    };
    return rectangle;
}
//function called ..  
// let obj = createRectangle();


// function createRectangle(len, bre){
//     return rectangle = {
//         len,
//         bre,
//         draw(){
//             console.log('Drawing Rectangle!');
//         }
//     };
// }
// let rectObj1 = createRectangle(3,8);



// constructor function .. 
function Rectangle(len, bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('Drawing');
    }
}
// object creation using constructor .. 
 let rectangleObject = new Rectangle(4,6);


 // deletion 
 rectangleObject.color = 'Yellow';
 console.log('color');
 // now removal of color property .. 
 delete rectangleObject.color;
 console.log(rectangleObject);

 // constructor .. 
 Rectangle.constructor;