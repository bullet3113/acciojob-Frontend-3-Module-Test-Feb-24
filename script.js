const tableData = document.getElementById("table-data");
const sortBtnMarket = document.getElementById('sort-btn-market')
const sortBtnPercent = document.getElementById('sort-btn-percent')

let result = [];

const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-wBFob72E4g4vkfBxHWMJ6hNo	' } };

// function fetchData() {
// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10', options).then(response => response.json()).then((data) => {
//     result = data
//     console.log(result)


//     let finalData = "";

//     data.map((d) => {
//         let tempData = `<tr>
//         <td>${d.name}</td>
//         <td>${d.symbol}</td>
//         <td>${d.current_price}</td>
//         <td>${d.total_volume}</td>
//         <td>${d.price_change_percentage_24h * 100}</td>
//         <td>${d.market_cap}</td>
//       </tr>`;

//         finalData += tempData;
//     })

//     tableData.innerHTML = finalData;


// }).catch(error => console.log(error));

console.log(result);

console.log(result);

sortBtnMarket.addEventListener('click', (e) => {
    console.log(e);
})

sortBtnPercent.addEventListener('click', (e) => {
    console.log(e);
})