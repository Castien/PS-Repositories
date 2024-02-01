import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  // useEffect
  useEffect(() => {
    // connect to the backend
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/movies");
      const data = await res.json();
      console.log(data);
      // set the data to the state movies variable
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Movies FullStack App</h1>

      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviesList movies={movies} />} />
        <Route path='/movies/:id' element={<MovieDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
