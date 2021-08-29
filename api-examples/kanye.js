const dailyQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data))
}


const displayQuote = quote =>{
    const quotes = document.getElementById('b-quote')
    quotes.innerText = quote.quote
}