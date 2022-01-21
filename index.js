document.addEventListener("DOMContentLoaded", () => {
    userSelect()
    fetchCatFacts()
    fetchCatImage()
    btnClick()
})

function fetchCatImage(){
    let image = document.getElementById("cat-image")
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}

function btnClick(){
    let button = document.getElementById("new-cat-btn")
    button.addEventListener("click", fetchCatImage)
}

function fetchCatFacts(){
    fetch('https://catfact.ninja/facts')
    .then(resp => resp.json())
    .then(json => 
        renderCatFact(json.data)
    )
}

function renderCatFact(facts){
    let catFact = document.getElementById("fact-text")
    facts.slice(0,sessionStorage.getItem("userNum")).map(fact =>{
        const p = document.createElement('p')
        p.setAttribute("id", "actual-fact")
        p.innerHTML = fact.fact
        catFact.appendChild(p)
    })
}

function userSelect(){
    let userSelection = document.getElementById("fact-num")
    userSelection.addEventListener("change", function(){
        sessionStorage.setItem("userNum", userSelection.value), 
        location.reload()
    })  
}
