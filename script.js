document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'a5b2065a7c003f8afdfb3bc3';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('from');
    const toCurrencySelect = document.getElementById('to');
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

    //fetch data from api
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRates = data.conversion_rates;
            const currencies = Object.keys(exchangeRates);

            //looping through the options
            currencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency;
                option.textContent = currency;
                fromCurrencySelect.appendChild(option);
                toCurrencySelect.appendChild(option.cloneNode(true));
            });
        })
        .catch(error => {
            console.error('Error fetching currency data:', error);
        });

        //Adding Event listener click on the convert button
    convertButton.addEventListener('click', () => {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = parseFloat(amountInput.value);

        //specifying the values to be entered
        if (isNaN(amount)) {
            resultDiv.textContent = 'Please enter a valid amount.';
            return;
        }

        // fetching the values for different currencies
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const exchangeRates = data.conversion_rates;
                const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
                const convertedAmount = (amount * rate).toFixed(2);

                resultDiv.textContent = `Result: ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
            const switchIcon = document.getElementById('switch-currencies')
            switchIcon.addEventListener('click', ()=>{
                const fromCurrencyValue = fromCurrencySelect.value;
                fromCurrencySelect.value = toCurrencySelect.value;
                toCurrencySelect.value = fromCurrencyValue;
            });
    });
});
