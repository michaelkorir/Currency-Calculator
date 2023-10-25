
let apiURL=`https://v6.exchangerate-api.com/v6/a5b2065a7c003f8afdfb3bc3/latest/USD`;
const fromDropDown = document.getElementById("select-from-currency");
const toDropDown = document.getElementById("select-to-currency");
//fetch data from Exchangerate api 
fetch(apiURL)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })