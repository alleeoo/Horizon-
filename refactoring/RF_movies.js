// Movie data
const movies = [
    {
        title: "Avengers EndGame",
        imageUrl: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF894,1000_QL80_.jpg"
    },
    {
        title: "Dune: Part Two",
        imageUrl: "https://static.wixstatic.com/media/53da7b_b2da189c87324e65886673d6edca7bdb~mv2.jpg/v1/fill/w_568,h_852,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/53da7b_b2da189c87324e65886673d6edca7bdb~mv2.jpg"
    },
    {
        title: "Barbie",
        imageUrl: "https://play-lh.googleusercontent.com/PhI5HgXUMHOIkvwvR7Ul2NvdbbTOHxSMprz9RTUxNOgYmNbm8t4JSLrM6bVBDNxP5Ijd4HFPo6pHZCSgwQo"
    },
    {
        title: "BumbleBee",
        imageUrl: "https://resizing.flixster.com/2ncr58Ml0rjd7MolvZ-9Pm3DgSA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q2NzMzZjBkLTdhNTctNGQzYy04NjI1LWQ5MjdiYThmNTE4Ni53ZWJw"
    },
    {
        title: "Avatar: The Way of Water",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg"
    },
    {
        title: "Guardians of the Galaxy Vol. 3",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "Joker",
        imageUrl: "https://www.rogerebert.com/wp-content/uploads/2024/08/Joker-jpg.webp"
    },
    {
        title: "Black Panther: Wakanda Forever",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg"
    },
    {
        title: "Captain America: Winter Soldier",
        imageUrl: "https://cdn11.bigcommerce.com/s-twbzkv97cv/images/stencil/1280x1280/products/4356/6901/captainamericathewintersoldier__67988.1578039379.jpg?c=2"
    },
    {
        title: "Black Widow",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Black_Widow_%282021_film%29_poster.jpg/250px-Black_Widow_%282021_film%29_poster.jpg"
    }
];

// DOM elements
const movieContainer = document.getElementById('movieContainer');

// Render movies
function renderMovies() {
    movieContainer.innerHTML = movies.map(movie => `
        <article class="movie-card">
            <img src="${movie.imageUrl}" 
                 alt="${movie.title}" 
                 class="movie-card__image">
            <h2 class="movie-card__title">${movie.title}</h2>
        </article>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', renderMovies);