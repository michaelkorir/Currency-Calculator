document.addEventListener('DOMContentLoaded', (){
    let apiURL=`https://v6.exchangerate-api.com/v6/a5b2065a7c003f8afdfb3bc3/latest/USD`;

    const amountInput = document.getElementById('amount');
    const fromDropDown = document.getElementById("select-from-currency");
    const toDropDown = document.getElementById("select-to-currency");
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

//fetch data from Exchangerate api 
fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        const exchangeRates = data.convertion_rate;
        const currencies =Object.keys(exchangeRates);

        currencies.forEach(currency => {
            const option = document.createElement('option');
            option.value = currency;
            option.textContent = currency;
            fromDropDown.appendChild(option);
            toDropDown.appendChild(option.cloneNode(true));
        })
    })
    .catch(error => {
        console.error('Error fetching data:',error);
    })

    
}