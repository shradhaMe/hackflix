import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCatalogue() {

  console.log('Catalogue has return')
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '9b4cc661bf8622c89299a0070c561412',
        include_adult: false
      }
    }).then(function (event) {
      console.log(event);

      setMovies(event.data.results);
      console.log(event.data.results);

    })

  }, []);


  return (
    <section>
      <h2>Here are your viewing options:</h2>
      <ul className="catalogue">
        {
          movies.map(function (movie) {
            return (

              <Link to={`/${movie.id} key={movie.id}`}>
                <li>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`A poster for the movie ${movie.title}`} />
                </li>
              </Link>
            )

          })
        }
      </ul>

    </section>
  )
}

export default MovieCatalogue;


// api key: 9b4cc661bf8622c89299a0070c561412
//1 import the axios library
//2. import the useState Hook and the useEffect Hook
//3. Initialize state to keep track of the movie data which will be returned from the api
// 4. initialize a useEffect to run the side effect of fetching data from the movie API (this side effect is running a single time on page load) so pass a empty array by writing "[]".
 // 5. make an asynchronous request to the TMDB API using axios
 // 6. save the returned data within state
 //7. Map through state and return a movie for each movie present in the returned API data
 // first components is rendered and then only a side effect will rendered.
 //Life cycle of a component. when we update state inside of the component it will update component and its children will render on the page.
 // difference between initializing state as null and state as [] is map loops through a array.  useState([]) this is a array and map loops through it.
 // Will use the Link to make the posters clickable and navigate to a uniques URL to represent each specific movie.
