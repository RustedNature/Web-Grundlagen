const clockElem = document.getElementById("clock");
updateClock();
function updateClock(){
    clockElem.innerText = new Date().toLocaleTimeString();

}
setInterval(updateClock,1000);

const jokeElem = document.getElementById("joke");


fetch("https://api.chucknorris.io/jokes/random?category=dev").then(response =>{
    return response.json();
}).then(jsonData => {
    jokeElem.innerText = jsonData.value;
});

