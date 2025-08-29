// Data film (tinggal tambah banyak)
const movies = [
  { title: "SUPERMAN", image: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "BRING HER BACK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76b1HnM-Le8zygVso8HBnpKjKdzC1wC_Zdw&s", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Final Destination: Bloodlines", image: "https://upload.wikimedia.org/wikipedia/id/a/ab/Final_Destination_Bloodlines_%282025%29_poster.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Clown in a Cornfield", image: "https://m.media-amazon.com/images/I/81aQjd0EioL._UF1000,1000_QL80_.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "M3GAN 2.0", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrr3FrN0IPNKm6LLECVAjCI9p1bdfsx-77A&s", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Wolf Man", image: "https://upload.wikimedia.org/wikipedia/id/d/dd/Wolf_Man_2025_film_poster.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Until Dawn", image: "https://upload.wikimedia.org/wikipedia/id/f/fc/Until_Dawn_%282025%29_poster.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Companion", image: "https://upload.wikimedia.org/wikipedia/id/4/48/Companion_film_poster.jpg" },
  { title: "The Gorge", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBWbPya2CJOVm2TZbt2oAWTGfpBoY2ETgrA&s", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Mission: Impossible – The Final Reckoning", image: "https://upload.wikimedia.org/wikipedia/id/3/36/Fix_Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster2.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "The Thursday Murder Club", image: "https://m.media-amazon.com/images/M/MV5BYmQ4NWVjN2EtN2U3NC00YzZhLWIzYmMtNjQ0ZjNiN2MzNDI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "F1", image: "https://upload.wikimedia.org/wikipedia/id/4/44/F1_The_Movie_Theatrical_Poster.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "28 Years Later", image: "https://upload.wikimedia.org/wikipedia/id/thumb/5/5d/28_Years_Later_film.jpg/250px-28_Years_Later_film.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Heads of State", image: "https://upload.wikimedia.org/wikipedia/id/thumb/0/08/Heads_of_State_film_poster.jpg/250px-Heads_of_State_film_poster.jpg", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Havoc", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRm1zO2kly7jxExyWFd8IV09RruXvTectVBvisTIAOBbem87KCu", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "The Phoenician Scheme", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTExpbBQF4T8g5U8WwDPbk_F5mNt-76xFXiUGD0V2A13WT5KTWh", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "Exterritorial", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXjA7Lzdvo2J0juganSfwlbzzZjycBHv7zSB826E399qNoe5K", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
  { title: "The Old Guard 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4jsc7fsNBYK4939_9EUouARIBeJdIOO1g-6MeDaRMRKThrCx", adLink: "https://www.effectivecpmrate.com/zhmshisn?key=82f1659a3263a18da8917cd00564de60" },
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
