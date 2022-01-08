document.addEventListener("DOMContentLoaded", () => {
    userSelect()
    fetchCatFacts()
    renderCatImage()
})

function fetchCatFacts(){
    fetch('https://catfact.ninja/facts')
    .then(resp => resp.json())
    .then(json => 
        renderCatFact(json.data)
    )
}

function fetchCatImage(){
    fetch('https://cataas.com/cat')
    .then(resp=>resp.json)
    .then(json => 
        renderCatImage(json.data))
}

function renderCatImage(image){
    console.log(image)
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
