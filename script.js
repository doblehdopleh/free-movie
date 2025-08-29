// Data film (tinggal tambah banyak)
const movies = [
  { title: "SUPERMAN", image: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "BRING HER BACK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76b1HnM-Le8zygVso8HBnpKjKdzC1wC_Zdw&s", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Final Destination: Bloodlines", image: "https://upload.wikimedia.org/wikipedia/id/a/ab/Final_Destination_Bloodlines_%282025%29_poster.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Clown in a Cornfield", image: "https://m.media-amazon.com/images/I/81aQjd0EioL._UF1000,1000_QL80_.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 5", image: "https://m.media-amazon.com/images/M/MV5BMGQzOWE3N2QtMmE1Ni00YjU5.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 6", image: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYz.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 7", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 8", image: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 9", image: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYz.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 10", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Movie 11", image: "https://i.imgur.com/QuCLUYa.jpeg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },

  
  
];

// Konfigurasi pagination
const itemsPerPage = 18;
let currentPage = 1;

const grid = document.getElementById("movie-grid");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Render film sesuai halaman
function renderMovies() {
  grid.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedMovies = movies.slice(start, end);

  paginatedMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <a href="${movie.adLink}" target="_blank">
        <img src="${movie.image}" alt="${movie.title}">
      </a>
      <h3>${movie.title}</h3>
      <button onclick="window.open('${movie.adLink}', '_blank')">Play</button>
    `;
    grid.appendChild(card);
  });

  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(movies.length / itemsPerPage)}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(movies.length / itemsPerPage);
}

// Event pagination
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderMovies();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(movies.length / itemsPerPage)) {
    currentPage++;
    renderMovies();
  }
});

// Load pertama
renderMovies();
