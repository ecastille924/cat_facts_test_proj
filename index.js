document.addEventListener("DOMContentLoaded", () => {
    fetchCatFacts();
})

function fetchCatFacts(){
    fetch('https://catfact.ninja/facts')
    .then(resp => resp.json())
    .then(json => 
        renderCatFact(json.data)
    )
}

// Display some data in the DOM 


function renderCatFact(facts){
    let catFact = document.getElementById("fact-text")
    let userSelection = document.getElementById("fact-num").value
    facts.slice(0,userSelection).map(fact =>{
        const p = document.createElement('p')
        p.setAttribute("id", "actual-fact")
        p.innerHTML = fact.fact
        catFact.appendChild(p)
    })
}


    // document.getElementById("fact-num").addEventListener("click", console.log("yo"))

