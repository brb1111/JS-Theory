const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';


let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    }
)   //배열안에 있는 모든 toDos로 통함
    //filter는 배열의 모든 아이템을 통해 함수를 실행 true인 아이템들만 가지고 새로운 배열을 만들고
    toDos = cleanToDos;
    saveToDos();
    console.log(cleanToDos);
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function something(toDo) { 
    paintToDo(toDo.text); 
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); //javascript object으로 변환
        parsedToDos.forEach(something); //기본적으로 함수를 실행시키는데 배열에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜주는 것 한마디로 parseToDos에 있는 것을 각각 실행시켜줌
    
    }else {
        
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();