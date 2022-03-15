import './index.css';
import Header from './Header';
import MovieCatalogue from './MovieCatalogue';
import { Routes, Route } from 'react-router-dom';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <div className="wrapper">
      {/* {this app has a header, Movie Catalogue, Movie Details component} */}
      <Header />

      <Routes>
        <Route path="/" element={<MovieCatalogue />} />
        <Route path="/:movieId" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
