// console.log(a);
// var a = 200;
// a  = 500;
// var a = 600;

// let b = 500;
// console.log(b);
// b = 700;

// let c = 1000;

// call();

// function call(){
//     console.log('printing something', c);
// }

// fun2();

// const fun2 = () =>{
//     console.log("Function 2 is called!!");
// }

// console.log(a);
// let a = 340;
// console.log(a);



// let value1 = 600;
// console.log(value1); // 600

// function print(v){
//     let value1 = v;
//     console.log(value1);
// }

// print(100);
// // console.log(b);
// console.log(value1); // 100


console.log(value1); // undefined

var value1 = 500;
let value2 = 600;
console.log(value1); // 500
changeVal(1000);
change(1000);
console.log(value1); // 1000
console.log(value2); // 600

const change = (v) =>{
    value2 = 300;
    console.log(value2);
}
change(100);
function changeVal(e) {
    value1 = e
    console.log(value1); // 1000
}



















