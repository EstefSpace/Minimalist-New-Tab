function setPlaceholder() {
    const placeholders = ["What will you look for today?", "Simple cooking recipes", "github", "youtube", "pico css", "chrome web store", "japanese gastronomy"];
    const $placeholder = document.getElementById("search");

    $placeholder.setAttribute("placeholder", `${placeholders[Math.floor(Math.random() * placeholders.length)]}`)



}

function setClockAndDate() {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
    const date = new Date();

    
    
    const clock = date.toLocaleTimeString();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    clockElement.innerHTML = `<kbd>${clock}</kbd>`
    dateElement.innerHTML = `<mark>${months[month]} ${days[day]}, ${year}</mark>`
}

function setYandex() {
    const form = document.querySelector("form");
    const inputSearch = document.getElementById("search");
    const search = document.getElementById("search-?");

    form.setAttribute("action", "https://yandex.com/search/?text=")
    inputSearch.setAttribute("name", "text")
    search.setAttribute("value", "Yandex")
    localStorage.setItem("search", "yandex")
}

function setBing() {
    const form = document.querySelector("form");
    const inputSearch = document.getElementById("search");
    const search = document.getElementById("search-?");

    form.setAttribute("action", "https://bing.com/search?q=")
    inputSearch.setAttribute("name", "q")
    search.setAttribute("value", "Bing")
    localStorage.setItem("search", "bing")
    
}

 
function setGoogle() {
    const form = document.querySelector("form");
    const inputSearch = document.getElementById("search");
    const search = document.getElementById("search-?");

    form.setAttribute("action", "https://google.com/search?q=")
    inputSearch.setAttribute("name", "q")
    search.setAttribute("value", "Google")
    localStorage.setItem("search", "google")
    
}

function setYahoo() {
    const form = document.querySelector("form");
    const inputSearch = document.getElementById("search");
    const search = document.getElementById("search-?");

    form.setAttribute("action", "https://search.yahoo.com/search?p=")
    inputSearch.setAttribute("name", "p")
    search.setAttribute("value", "Yahoo")
    localStorage.setItem("search", "yahoo")

}

const google = document.getElementById("google");
const yahoo = document.getElementById("yahoo");
const bing = document.getElementById("bing");
const yandex = document.getElementById("yandex");


google.addEventListener("click", () => {
    setGoogle()
    alert("You have chosen Google")
})

yahoo.addEventListener("click", () => {
    setYahoo()
    alert("You have chosen Yahoo")
})

bing.addEventListener("click", () => {
    setBing()
    alert("You have chosen Bing")
})

yandex.addEventListener("click", () => {
    setYandex()
    alert("You have chosen Yandex")
})


const search = localStorage.getItem("search");

switch(search) {
    case "google":
        setGoogle()
    break;
    case "yahoo":
        setYahoo()
    break;
    case "bing":
        setBing()
    break;
    case "yandex":
        setYandex()
    
}

setPlaceholder()
setInterval(() => {
    setClockAndDate()
}, 1000);

