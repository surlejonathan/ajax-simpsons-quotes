const fetchSimpsonsQuote = () => {
  const url = "https://simpsons-quotes-api.herokuapp.com/quotes";

  axios
    .get(url)
    .then((response) => response.data)
    .then((data) =>
      data.map((item) => {
        const simpson = `<h2>${item.character}</h2>
          <img src=${item.image} alt=${item.character} />
          <p><strong>"${item.quote}"</strong></p>
          <button type="button" id='quoteGenerator'>Generate a quote</button>
        `;
        document.getElementById("simpsons").innerHTML = simpson;
        const quoteButton = document.getElementById("quoteGenerator");
        quoteButton.addEventListener("click", fetchSimpsonsQuote);
      })
    );
};

fetchSimpsonsQuote();
