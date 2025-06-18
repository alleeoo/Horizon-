// Movie data - could be moved to a separate data file if large
const movies = [
    { 
        id: 1, 
        title: 'Bridgerton Season 3', 
        imageUrl: 'https://resizing.flixster.com/j1KHmUoqxiaYxZoNJStOHBnmBXY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18974714_b_h9_ao.jpg',
        details: 'Romantic drama series set in Regency-era London.', 
        reviews: 'Loved it! So steamy!' 
    },
    { 
        id: 2, 
        title: 'Emily in Paris', 
        imageUrl: 'https://s10019.cdn.ncms.io/wp-content/uploads/2024/09/Emily-in-paris.jpg.jpeg',
        details: 'A stylish comedy about an American in Paris.', 
        reviews: 'Charming and fun!' 
    },
    { 
        id: 3, 
        title: 'Peaky Blinders', 
        imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/f7ffc4ffa21f3ae373bacf9502771bf724f2503b177e415d8aacc56d6ca05970.jpg',
        details: 'Crime drama about a gangster family.', 
        reviews: 'Dark and gripping.' 
    },
    // Add more movies here...
];

// DOM Elements
const elements = {
    searchInput: document.getElementById('movieSearch'),
    searchResults: document.getElementById('searchResults'),
    movieDetails: document.getElementById('movieDetails'),
    movieContainer: document.getElementById('movieContainer')
};

// Initialize the app
function init() {
    renderMovieGrid();
    setupEventListeners();
}

// Render all movies in the grid
function renderMovieGrid() {
    if (!elements.movieContainer) return;

    elements.movieContainer.innerHTML = movies.map(movie => `
        <article class="movie-card" data-id="${movie.id}">
            <img src="${movie.imageUrl}" 
                 alt="${movie.title}" 
                 class="movie-card__image">
            <h3 class="movie-card__title">${movie.title}</h3>
        </article>
    `).join('');
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    elements.searchInput.addEventListener('input', handleSearchInput);

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search')) {
            elements.searchResults.style.display = 'none';
        }
    });

    // Movie card click (using event delegation)
    if (elements.movieContainer) {
        elements.movieContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.movie-card');
            if (card) {
                const movieId = parseInt(card.dataset.id);
                const movie = movies.find(m => m.id === movieId);
                if (movie) {
                    loadMovieDetails(movie);
                }
            }
        });
    }
}

// Handle search input
function handleSearchInput() {
    const query = this.value.toLowerCase().trim();
    elements.searchResults.innerHTML = '';
    elements.movieDetails.innerHTML = '';
    
    if (query === '') {
        elements.searchResults.style.display = 'none';
        return;
    }

    const matched = movies.filter(m => 
        m.title.toLowerCase().includes(query)
    );

    if (matched.length === 0) {
        elements.searchResults.innerHTML = `
            <div class="search__result-item">No movies found.</div>
        `;
        elements.searchResults.style.display = 'block';
        return;
    }

    matched.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'search__result-item';
        div.textContent = movie.title;
        div.addEventListener('click', () => {
            loadMovieDetails(movie);
            elements.searchResults.style.display = 'none';
            elements.searchInput.value = movie.title;
        });
        elements.searchResults.appendChild(div);
    });

    elements.searchResults.style.display = 'block';
}

// Load movie details
function loadMovieDetails(movie) {
    elements.movieDetails.innerHTML = `
        <h2 class="movie-details__title">${movie.title}</h2>
        <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-details__image">
        <p><strong>Details:</strong> ${movie.details}</p>
        <p><strong>Reviews:</strong> ${movie.reviews}</p>
    `;
}
if (typeof module !== 'undefined')
{
    module.exports ={
        movies,
        loadMovieDetails,
        handleSearchInput
    };
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
// Key Refactoring Improvements in JavaScript:
// Modular Structure:

// Separated concerns into distinct functions

// Organized code logically (initialization, rendering, event handling)

// DOM Management:

// Centralized DOM element references in an elements object

// Used event delegation for movie card clicks

// Improved dynamic content generation

// Data Management:

// Enhanced movie data structure with image URLs

// Made data more complete and ready for expansion

// Performance:

// Reduced DOM queries by caching elements

// Used efficient event handling

// Optimized rendering with template literals

// Maintainability:

// Clear function naming

// Better code organization

// Easier to extend functionality

// Error Handling:

// Added null checks for DOM elements

// More robust event handling

// This structure makes it easy to:

// Add more movies by extending the movies array

// Add new features by extending the existing functions

// Maintain and update the code

// Scale the application as needed