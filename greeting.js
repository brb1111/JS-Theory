const form = document.querySelector(".js-form"),
input = form.querySelector("input"), //윗줄에서 정의한 form을 가져와서 element를 쓴다는 의미
greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){ 
    localStorage.setItem(USER_LS, text); // 값을 저장하는 것.
}      

function handleSubmit(event){ 
    event.preventDefault();//폼을 제출하려할때 새로고침같은 현상이 발생 안되게 하는 것.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);// user is
    }
}

function init(){
    loadName();
}

init();
