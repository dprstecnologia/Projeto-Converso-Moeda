document.getElementById('converterDe').addEventListener('change', function() {
    var selectedCurrency = this.value;
    var currencyImage = document.getElementById('currencyImage');

    switch (selectedCurrency) {
        case 'BRL':
            currencyImage.src = './assets/brasil.png';
            break;
        case 'USD':
            currencyImage.src = './assets/dolar.png';
            break;
        case 'EUR':
            currencyImage.src = './assets/euro.png';
            break;
    }
});


document.getElementById('converterPara').addEventListener('change', function() {
    var selectedCurrency = this.value;
    var currencyImage = document.getElementById('currencyImage');

    switch (selectedCurrency) {
        case 'BRL':
            currencyImage.src = './assets/brasil.png';
            break;
        case 'USD':
            currencyImage.src = './assets/dolar.png';
            break;
        case 'EUR':
            currencyImage.src = './assets/euro.png';
            break;
    }
});
