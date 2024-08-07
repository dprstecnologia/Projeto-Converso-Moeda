const apiKey = 'b0d25c8c696e925571e99568';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

const currencyMap = {
    'BRL': {
        name: 'Real',
        symbol: 'R$',
        placeholder: 'R$ 10.0000,00'
    },
    'USD': {
        name: 'Dólar',
        symbol: 'US$',
        placeholder: 'US$ 10.0000,00'
    },
    'EUR': {
        name: 'Euro',
        symbol: '€',
        placeholder: '€ 10.0000,00'
    }
};

document.getElementById('converterDe').addEventListener('change', function () {
    var selectedCurrency = this.value;
    var currencyImage = document.getElementById('currencyImageDe');
    var currencyText = document.getElementById('currencyTextDe');
    var valorInput = document.getElementById('valorInput');

    currencyImage.src = `./assets/${selectedCurrency}.png`;
    currencyText.textContent = currencyMap[selectedCurrency].name;
    valorInput.placeholder = currencyMap[selectedCurrency].placeholder;
});

document.getElementById('converterPara').addEventListener('change', function () {
    var selectedCurrency = this.value;
    var currencyImage = document.getElementById('currencyImagePara');
    var currencyText = document.getElementById('currencyTextPara');

    currencyImage.src = `./assets/${selectedCurrency}.png`;
    currencyText.textContent = currencyMap[selectedCurrency].name;
});

document.getElementById('convertButton').addEventListener('click', function () {
    var converterDe = document.getElementById('converterDe').value;
    var converterPara = document.getElementById('converterPara').value;
    var valorInput = parseFloat(document.getElementById('valorInput').value.replace(/[^0-9,-]+/g,"").replace(",","."));

    if (isNaN(valorInput)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    fetch(`${apiUrl}${converterDe}`)
        .then(response => response.json())
        .then(data => {
            var taxaDeCambio = data.conversion_rates[converterPara];
            var valorConvertido = valorInput * taxaDeCambio;

            document.getElementById('currencyValueDe').textContent = `${currencyMap[converterDe].symbol} ${valorInput.toFixed(2)}`;
            document.getElementById('currencyValuePara').textContent = `${currencyMap[converterPara].symbol} ${valorConvertido.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Erro ao obter taxas de câmbio:', error);
            alert("Erro ao obter taxas de câmbio. Tente novamente mais tarde.");
        });
});

// Initialize on page load
var initialCurrency = document.getElementById('converterDe').value;
document.getElementById('currencyImageDe').src = `./assets/${initialCurrency}.png`;
document.getElementById('currencyTextDe').textContent = currencyMap[initialCurrency].name;
document.getElementById('valorInput').placeholder = currencyMap[initialCurrency].placeholder;