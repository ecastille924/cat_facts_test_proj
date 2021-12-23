document.addEventListener("DOMContentLoaded", () => {
    fetchCatFacts();
    
})

// Make an API call using fetch 
// Display some data in the DOM 
function fetchCatFacts(){
    fetch('https://catfact.ninja/facts')
    .then(resp => resp.json())
    .then(json => 
        renderCatFact(json.data)
        )
}

function renderCatFact(facts){
    let catFact = document.getElementById("fact-text")
    facts.map(fact =>{
        const p = document.createElement('p')
        p.setAttribute("id", "actual-fact")
        p.innerHTML = fact.fact
        catFact.appendChild(p)
        // console.log(fact.fact)
    })
}
