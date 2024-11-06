

let a = 21;

// if a > 20 then print that A is above 20

if( a > 20 ){
    // this part gets only executed when the mentioned condition is true
   console.log("A is above 20 and value is", a);
}
else{
    // when the mentioned condition is false this code gets executed
    console.log("A is below 20 and the value is", a);
}


if(a<10){
    // do something
    console.log("Value is less than 10");
}
else if(a>=10 && a<20){
    // do something
    console.log("Value is between 10 ad 20");
}
else if(a>=20 && a<30){
    // do something
    console.log("Value is between 20 ad 30");
}
else if(a>=30 && a<=40){
    // do something
    console.log("Value is between 30 ad 40");
}
else{
    // do something
    console.log("Value is above 40");
}

let age = 22;
let gender = 'M';


if(gender === 'F'){
    if(age > 18){
       console.log("Female is allowed for marriage");
    }
    else{
        console.log("Female is not allowed for marriage");
    }
}else if(gender === 'M'){
    if(age > 21){
        console.log("Male is allowed for marriage");
     }
     else{
         console.log("Male is not allowed for marriage");
     }
}else{
    console.log("Invalid Gender")
}


let num = 20;

switch(num){
    case 1:
        console.log("Valus is 1");
    break;

    case 10: 
        console.log("Value is 10");
    break;

    case 20: 
        console.log("Value is 20");
    break;
}

switch(num){
    // this will not gets executed as cases can only work with string, number or character
    case (num < 10) :
        console.log("Value is less than 10");

    case (num>=10 && num < 20) : 
        console.log("Value is in 10 - 20 range");

    case (num>=20 && num < 30) : 
        console.log("Value is in 20 - 30 range");

}