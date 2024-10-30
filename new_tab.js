function setPlaceholder() {
    const placeholders = ["What will you look for today?", "Simple cooking recipes", "github", "youtube", "pico css", "chrome web store", "japanese gastronomy"];
    const $placeholder = document.getElementById("search");

    $placeholder.setAttribute("placeholder", `${placeholders[Math.floor(Math.random() * placeholders.length)]}`)



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

google.addEventListener("click", () => {
    setGoogle()
    alert("You have chosen Google")
})

yahoo.addEventListener("click", () => {
    setYahoo()
    alert("You have chosen Yahoo")
})


const search = localStorage.getItem("search");

search === 'google' ? setGoogle() : setYahoo();

setPlaceholder()

