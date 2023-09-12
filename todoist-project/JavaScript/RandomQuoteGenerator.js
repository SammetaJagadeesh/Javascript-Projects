const para = document.getElementById("para");
const button = document.getElementById("button");
button.addEventListener("click", function () {
    let response = fetch("https://type.fit/api/quotes", {
        method: "GET"
    })
    console.log(response);
    response.then(function (res) {
        res.json().then(function (quotes) {
            const randomIndex = Math.floor(Math.random()*quotes.length);
            console.log(randomIndex)

            const randomQuote = quotes[randomIndex].text;
            para.innerText = randomQuote;
        });
    })

})


