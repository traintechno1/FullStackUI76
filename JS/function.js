// function defination, here a and b are function parameters
function addTwoNumbers(a, b){
    // function body
    console.log("Value of a = " + a + " & b = " + b + " Addition = " + (a + b));
}

// function call
addTwoNumbers(20, 40);

addTwoNumbers(40, 50);

function calculateAreaOfCircle(radius){
    return 3.14 * radius * radius;
}

console.log(calculateAreaOfCircle(10));
console.log(calculateAreaOfCircle(15));

let result3 = calculateAreaOfCircle(40);
console.log(result3);


const areaOfRectangle = (length, width) => {
    console.log("Area of rectangle function is called");
    return length * width;
}

console.log(areaOfRectangle(20, 40));