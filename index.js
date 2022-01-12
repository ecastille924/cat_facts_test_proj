document.addEventListener("DOMContentLoaded", () => {
    userSelect()
    fetchCatFacts()
    fetchCatImage()
})

function fetchCatFacts(){
    fetch('https://catfact.ninja/facts')
    .then(resp => resp.json())
    .then(json => 
        renderCatFact(json.data)
    )
}

function fetchCatImage(){
    let catImg = document.getElementById("cat-image")
    fetch('https://cataas.com/cat?json=true')
    .then(function(response){
        return response.blob()
    })
    .then(function(data){
       let dispImg = URL.createObjectURL(data)
       catImg.src = dispImg
       console.log(dispImg)
    })
}

function renderCatImage(image){
    document.getElementById("cat-image").src = image
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
