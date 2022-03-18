const baseURL = "https://catfact.ninja"

async function getRequest(endPoint){
    return await fetch(`${baseURL}/${endPoint}`).then( response => response.json()).then( response => {
        return response.fact
    })
}

async function getCatFact(){
    return await getRequest('fact')
}

async function main(){
    let data = await getCatFact()
    const phrase = document.getElementById("aleatorio").textContent = data
    console.log(data)
    
}

main()