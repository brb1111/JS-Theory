/* String
const name = "오주영";
*/
/*
Boolean
const wat = true;
*/
/*
Number
const wat = 666;
*/
/* Float
cosnt wat = 55.1;
*/

/*camel case = 변수명에서 스페이스를 써야하는 곳은 변수명에서 대문자로 입력
ex)
const what to do = "왓투두"; (x)
const whatToDo ="왓투두";
이게 프로그래머의 암묵적인 규칙이랍니다.
*/
/*

const something = "Something"
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", something];
*/

/*
//object 데이터타입
const ojyInfo = {
  name : "Ojy",
  age : 33,
  gender : "Male",
  Height : 179.5,
  favGame : ["LOL", "AutoChess"],
  favFood : [
    {name : "Kimchi", fatty : false},
    {name : "Burger", fatty : true}
  ]
}
console.log(ojyInfo.gender);

ojyInfo.gender = "Female";
console.log(ojyInfo.gender);
console.log(ojyInfo.favGame);
console.log(ojyInfo.favFood);
console.log(ojyInfo.favFood.name);
*/

//javascript 함수
/* ``String
function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}
const greetOjy = sayHello("오주영", 25);
console.log(greetOjy);
*/
/*
const calculator = {
  plus : function(a, b){
    return a + b;
  }

}

//console.log(greetOjy);
const plus = calculator.plus(5, 5);
console.log(plus)
*/
//DOM Document Object Model
/* querySelector css 선택자랑 비슷하다. #블라블라이면 id값이고
 .블라블라이면 class값. getelementById같은거 쓰지말고
 
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = 'I own you know';
*/
//event function
/* 
const title = document.querySelector("#title");

function handleClick(){
  title.style.color = "blue"
}
window.addEventListener("click", handleClick);
*/
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }else{
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
