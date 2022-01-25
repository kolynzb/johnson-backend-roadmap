const div = document.querySelector(".root");
const form = document.querySelector(".search-input");
var movies = [];

async function fecthData(title) {
  const data = await fetch(
    `https://yts.mx/api/v2/list_movies.json?query_term=${title}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (info) {
      movies = info.data.movies;
      console.log(movies);

      movies.map(function (movie) {
        const html = `
        <div class="div">
        <img src=${movie.large_cover_image} alt="" />
        <h1>${movie.title}</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${movie.yt_trailer_code}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
            ${movie.description_full}
        </p>
      </div>
        `;
        div.innerHTML = html;
      });
    });
}

function submitMovie(e) {
  e.preventDefault();
  fecthData(form.search.value);
}

form.addEventListener("submit", submitMovie);
