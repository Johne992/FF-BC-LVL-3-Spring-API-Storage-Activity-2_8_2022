// adds a name and value to localstorage obj
localStorage.setItem("name","John Doe");
//gets the value from localstorage obj and applies it to element wit hthe id demo
document.getElementById("demo").innerHTML = localStorage.getItem("name");
let userName = localStorage.getItem("name");
console.log(userName);
//this one removes that name & value pair
localStorage.removeItem("name");
userName = localStorage.getItem("name");
console.log(userName);

//an object with various datatypes
let lemonade = {
  title : "Lemonade",
  year  : 2016,
  platinum: true,
  albumCover: '/imgs/lemonade.jpg',
  discount : function(price){/*applies a discount*/} 
}

//ngl..im mad stuck
localStorage.setItem('turtleIMG',"uncle2019.jpg");

document.getElementById('jayaimg').innerHTML = localStorage.getItem('turtleIMG');


document.getElementById('jayaimg').setAttribute('src', localStorage.getItem('turtleIMG'));

let crush = localStorage.getItem('turtleIMG');
console.log(crush);





// adds a font and value to localstorage 
localStorage.setItem("font","Syne Tactile");
// gets the value from localstorage and applies it to element with id vinh
document.getElementById("vinh").innerHTML = localStorage.getItem("font");
let userFont = localStorage.getItem("font");
console.log(userFont);

//Justin
localStorage.setItem("myname","Justin");
document.getElementById("justintxt").innerHTML = localStorage.getItem("myname");

let fname= localStorage.getItem("myname");
console.log(fname);
