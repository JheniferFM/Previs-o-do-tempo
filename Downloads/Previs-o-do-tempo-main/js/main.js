const apikey = "98e4fc8d5d2206697f7738fad81834ac";
const cidade = document.getElementById("inputCidade");
const btn = document.getElementById("btn");

async function buscarcidade() {
    const cidadeNome = cidade.value.trim();

    if (!cidadeNome) {
        insertErrorHTML("Campo obrigatório");
        return;
    }

    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadeNome}&appid=${apikey}&lang=pt`);

        if (!resposta.ok) {
            throw new Error("Região não encontrada");
        }

        const dados = await resposta.json();
        
        insertHTML(dados);

    } catch (erro) {
        console.error("Erro: ", erro);
        insertErrorHTML(erro.message);
    }
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function insertErrorHTML(mensagem) {
    const resultado = document.getElementById("res");
    resultado.innerHTML = `<p class="erro">${mensagem}</p>`;
}

function insertHTML(dados) {
    const tempKelvin = dados.main.temp;
    const tempCelsius = kelvinToCelsius(tempKelvin).toFixed(2);
    const descricao = dados.weather[0].description;
    const cidadeNome = dados.name;
    const umidade = dados.main.humidity;
    const pressao = dados.main.pressure;
    const vento = dados.wind.speed;

    const resultado = document.getElementById("res");

    resultado.innerHTML = `
        <h2>Clima em ${cidadeNome}</h2>
        <p>Temperatura: ${tempCelsius}°C</p>
        <p>Descrição: ${descricao}</p>
        <p>Umidade: ${umidade}%</p>
        <p>Pressão Atmosférica: ${pressao} hPa</p>
        <p>Velocidade do Vento: ${vento} m/s</p>
    `;
}

btn.addEventListener("click", buscarcidade);
