import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  const { title, poster, _id } = movie;

  return (
    <div>
      <Link to={`/movies/${_id}`}> 
        <h3>{ title}</h3>
      </Link>

      {poster ? (
        <img src={poster} alt={title} />
      ) : (
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg"
          alt=""
        />
      )}
    </div>
  );
}

export default MovieItem;
