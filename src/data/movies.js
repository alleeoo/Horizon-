export const movies = [
  {
    id: 1,
    title: "Inception",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    rating: 8.8,
    year: 2010,
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "The Dark Knight",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 9.0,
    year: 2008,
    genre: "Action",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.9,
    year: 1994,
    genre: "Crime",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    rating: 9.3,
    year: 1994,
    genre: "Drama",
  },
  {
    id: 5,
    title: "The Godfather",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.2,
    year: 1972,
    genre: "Crime",
  },
  {
    id: 6,
    title: "Interstellar",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: 8.6,
    year: 2014,
    genre: "Sci-Fi",
  },
  {
    id: 7,
    title: "The Matrix",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.7,
    year: 1999,
    genre: "Sci-Fi",
  },
  {
    id: 8,
    title: "Forrest Gump",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    rating: 8.8,
    year: 1994,
    genre: "Drama",
  },
];

export const dramas = [
  {
    id: 1,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    rating: 9.5,
    year: 2008,
    genre: "Crime Drama",
  },
  {
    id: 2,
    title: "Game of Thrones",
    image: "https://image.tmdb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
    rating: 8.9,
    year: 2011,
    genre: "Fantasy",
  },
  {
    id: 3,
    title: "Stranger Things",
    image:
      "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    rating: 8.7,
    year: 2016,
    genre: "Sci-Fi",
  },
  {
    id: 4,
    title: "The Crown",
    image:
      "https://images.openai.com/thumbnails/url/NtvNM3icu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4uKfSsioisTLfMdy9KMYj0S3V1tvB3DDWNd_XPSs4ITg9KL3GtDDSMjIxwLSy1DAo38qkscfcMcqoISFcrBgApGCoc",
    rating: 8.7,
    year: 2016,
    genre: "Drama",
  },
  {
    id: 5,
    title: "The Last of Us",
    image:
      "https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    rating: 8.8,
    year: 2023,
    genre: "Drama",
  },
  {
    id: 6,
    title: "House of the Dragon",
    image:
      "https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    rating: 8.5,
    year: 2022,
    genre: "Fantasy",
  },
];

// Trending content combines both movies and dramas
export const trending = [...movies.slice(0, 4), ...dramas.slice(0, 4)].sort(
  (a, b) => b.rating - a.rating
);
