import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, rating, summary, poster, genres }) {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">({year})</h5>
        <ul className="movie__genreList">
          {genres.map((genre, index) => (
            <li key={index} className="movie__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h2 className="movie__rating">{rating}</h2>
        <p className="movie__summary">{summary.slice(0, 90)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
