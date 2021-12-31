document.addEventListener("DOMContentLoaded", () => {
    userSelect();
})

function fetchCatFacts(){
    fetch('https://catfact.ninja/facts')
    .then(resp => resp.json())
    .then(json => 
        renderCatFact(json.data)
        // console.log(json.data)
    )
}

// Display some data in the DOM 


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
        sessionStorage.setItem("userNum", userSelection.value)
       console.log(sessionStorage.getItem("userNum"))
       return sessionStorage.getItem("userNum")
    })
    fetchCatFacts()
}
    



    // document.getElementById("fact-num").addEventListener("click", console.log("yo"))

