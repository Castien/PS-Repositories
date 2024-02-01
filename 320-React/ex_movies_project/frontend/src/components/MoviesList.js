import MovieItem from "./MovieItem";
import Spinner from 'react-bootstrap/Spinner';

function MoviesList({ movies }) {
  return (
    <div>
      <h1>Movies List</h1>

      <div>
        {movies.length >= 1 ?
          movies.map((movie) => <MovieItem movie={movie} key={movie._id} />)
          :
          <Spinner animation="grow" variant="info" role="status"  as="span"> 
           <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </div>
    </div>
  );
}

export default MoviesList;
