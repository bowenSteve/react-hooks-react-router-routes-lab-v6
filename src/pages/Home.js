import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
  }, []);

  return (
    <body>
      <div>
        <header>
          <NavBar />
          <h1>Home Page</h1>
          {movies.map(movie => (
            <div key={movie.id}>
              <MovieCard movie={movie}/>
              <a href={`/movie/${movie.id}`}>View Info</a>
            </div>
          ))}
        </header>
        <main />
      </div>
    </body>
  );
}

export default Home;
