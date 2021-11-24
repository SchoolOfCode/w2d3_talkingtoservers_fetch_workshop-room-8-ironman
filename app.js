console.log("It's Kanye time...");
let datasetInh1 = document.querySelector("#kanye-quote");
//write an async function called getQuote
async function getQuote(event) {
const response = await fetch('https://api.kanye.rest/');
const data = await response.json();
datasetInh1.innerHTML = `<h1>${data.quote}</h1>`;
}
getQuote();
//Use fetch to send a GET request to https://api.kanye.rest/ and store the resolved value of the returned promise in a variable called response.