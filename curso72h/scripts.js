let chave ="cebcd482eda57fa9a6714c1c2ba91885"

async function buscarcidade(){
    let dados= await fetch("https://api.openweathermap.org/data/2.5/weather?q=londresappid=cebcd482eda57fa9a6714c1c2ba91885").then((resposta)=> resposta.json())

    console.log(dados)

}

function cliquenoBotão(){
    let cidade = document.querySelector("input-cidade").value

    console.log(cidade)
}


