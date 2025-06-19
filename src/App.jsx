<<<<<<< HEAD
function MovieCard({ movie }) {
  function onFavoriteClick() {
      alert("clicked");
  }

  return (
     <>
     <MovieCard movie={{title:"War 2" , release_date:  "2024"} } />
     <MovieCard movie={{title:"Bhubali 2" , release_date:  "2018"} } />

     </>
  );
}
export default MovieCard;
=======
import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
>>>>>>> de999fd (Final commit Project completely)
