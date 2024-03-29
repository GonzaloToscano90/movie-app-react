import "./index.css";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title}>Busca tus peliculas favoritas</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
