const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    "X-RapidAPI-Key": "0fe6ceff67mshc5ecf0f4712b21cp1ecf8ejsn41224c36a61b",
  },
};

fetch(
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const array__movies = response.d;
    array__movies.map((e) => {
        console.log(e);
      const title = e.l;
      const image = e.i.imageUrl;
      const cast = e.s;
      const card = `
      <div class="card">
            <img src="${image}" alt="">
            <h1>${title}</h1>
            <small>${cast}</small>
        </div>`;
        document.getElementById("container").innerHTML += card;
    });
  })
  .catch((err) => console.error(err));

