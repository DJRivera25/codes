const Movie = require("../models/Movie.js");

// ======= Register User ======= //
const addMovie = async (req, res) => {
  try {
    const { title, director, year, description, genre } = req.body;
    if (!title || !director || !year || !description || !genre) {
      return res.status(400).json({ error: `all fields are required` });
    }
    if (year < 0 || typeof year !== "number") {
      return res.status(400).json({ error: `year must be a number and must be greater than 0` });
    }
    const existingMovie = await Movie.findOne({ title, director, year, genre });
    if (existingMovie) {
      return res.status(400).json({ error: `movie already exists` });
    }
    const newMovie = new Movie({
      title,
      director,
      year,
      description,
      genre,
    });
    await newMovie.save();
    return res.status(201).json(newMovie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    if (movies.length === 0) {
      return res.status(404).json({ error: `no movies found` });
    }
    return res.status(200).json({ movies: movies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ error: `movie not found` });
    }
    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const { title, director, year, description, genre } = req.body;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ error: `movie not found` });
    }
    movie.title = title || movie.title;
    movie.director = director || movie.director;
    movie.year = year || movie.year;
    movie.description = description || movie.description;
    movie.genre = genre || movie.genre;
    await movie.save();
    return res.status(200).json({ message: `Movie updated successfully`, updatedMovie: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findByIdAndDelete(movieId);
    if (!movie) {
      return res.status(404).json({ error: `movie not found` });
    }
    return res.status(200).json({ message: `Movie deleted successfully` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const addCommentOnMovie = async (req, res) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;
    const comment = req.body.comment;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ error: `movie not found` });
    }
    movie.comments.push({ userId, comment });
    await movie.save();
    return res.status(200).json({ message: `comment added successfully`, updatedMovie: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getCommentsOnMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ error: `movie not found` });
    }
    if (movie.comments.length == 0) {
      return res.status(404).json({ message: `no comment on this movie` });
    }
    return res.status(200).json(movie.comments);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// ======= Exports ======= //
module.exports = {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  addCommentOnMovie,
  getCommentsOnMovie,
};
