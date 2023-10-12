const btcElelement = document.getElementById("btc");

async function loadBtc() {
const response = await fetch ("https://api.coindesk.com/v1/bpi/currentprice.json");
const res = await response.json();
console.log(res);
const { bpi , chartName , disclaimer, time} = res;
console.log(bpi , chartName , disclaimer, time);
btcElelement.textContent = `${bpi} ${chartName} ${disclaimer} ${time}`;
}
loadBtc();

