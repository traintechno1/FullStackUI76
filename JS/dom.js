// console.log(document);

let port =  document.location.port
let path =  document.location.pathname
// console.log(port);
// console.log(path);

function changeHeading(){
    // document.getElementsByTagName('h2')[1].innerHTML = "Changed Heading from JS";
    document.getElementById('heading1').innerHTML  = "Changed Heading from JS";
}

const changeHeadingColor = () =>{
    // console.log("Mouse is entered")
    // document.getElementsByTagName('h2')[0].style.backgroundColor = '#74d21a';
    document.getElementById('heading1').style.backgroundColor = '#74d21a';
    // document.getElementById('heading1').style.padding = '1rem 2rem';
    // document.getElementById('heading1').style.borderRadius = '6px';
}

const resetHeadingColor = () =>{
    // console.log("Mouse is exited")
    // document.getElementsByTagName('h2')[0].style.backgroundColor = 'transparent';
    document.getElementById('heading1').style.backgroundColor = 'transparent';
}

const textChanged = (event) =>{
    let value = event.target.value;
    let element = document.getElementById('heading4');

    if(value){
        element.innerHTML = value;
        element.classList.remove('heading4');
        element.classList.add('changedHeading4');
        
    }else{
        element.innerHTML = "Heading 4";
        element.classList.remove('changedHeading4');
        element.classList.add('heading4');
    }
}

const toggleHeading = () =>{
    let element = document.getElementById('heading2');
    element.classList.toggle('bg-color');
}

const changeFont = () =>{
    let elements = document.getElementsByClassName('text-div');
    console.log(elements.length);
    for(let i =0; i< elements.length; i++){
        elements[i].classList.add('change-font');
    }
}

const removeFontChanges = () =>{
    let elements = document.getElementsByClassName('text-div');
    console.log(elements.length);
    for(let i =0; i< elements.length; i++){
        elements[i].classList.remove('change-font');
    }
}