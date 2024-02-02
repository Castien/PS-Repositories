import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
// context
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  // useEffect
  useEffect(() => {
    // connect to the backend
    const fetchData = async () => {
      const res = await fetch("https://movies-fullstack-backend-w210.onrender.com/api/movies");
      const data = await res.json();
      console.log(data);
      // set the data to the state movies variable
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>


          {user ? (
            <>
              <NavBar />

              <Routes>
                <Route path="/about" element={<h3>About</h3>} />
                <Route
                  path="/movies"
                  element={<MoviesList movies={movies} />}
                />
                <Route path="/movies/:id" element={<MovieDetails />} />
              </Routes>
            </>
          ) : (
            <MainPage />
          )}


        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
