const API_KEY = "bfc15a948dba0213f8f367bf9586ec87";
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,//latitude: latitude
        longitude//longitude: longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("지리적 위치에 접근할 수 없습니다.")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{

    }
}

function init(){
    loadCoords();
}

init();