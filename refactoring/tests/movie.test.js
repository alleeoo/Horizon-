const { movies, loadMovieDetails } = require('../RF_hoizon');

// Sample test: Check if movie list is defined and not empty
test('Movie data is loaded', () => {
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
});

// Sample test: Find a movie by ID and check properties
test('Bridgerton has correct details', () => {
    const bridgerton = movies.find(m => m.title === 'Bridgerton Season 3');
    expect(bridgerton).toBeDefined();
    expect(bridgerton.details).toMatch(/Romantic drama/i);
});

// You can mock DOM elements to test loadMovieDetails if needed