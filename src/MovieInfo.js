import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MovieInfo() {
  const [details, setDetails] = useState({});

  // console.log(useParams());

  const { movieId: movie_id } = useParams();

  useEffect(function () {

    axios({
      url: `https://api.themoviedb.org/3/movie/${movie_id}`,
      params: {
        api_key: '9b4cc661bf8622c89299a0070c561412'
      }
    }).then((res) => {
      setDetails(res.data);
      // console.log(res.data);
    })
  }, [movie_id]);


  return (
    <section className="poster">
      <div className="description">
        <h3>{details.tagline}</h3>
        <h2>{details.title}</h2>
        <p>{details.overview}</p>
      </div>

      <div className="poster-image">

        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={`Movie poster for ${details.title}`} />
      </div>

    </section>

  )
}

export default MovieInfo;

//make a api request so exact movie and movie poster can render on the page.
// initialize state to represent the movie details which will be returned to us from the Api
//define a side effect which will fetch data about the movie after the component has first rendered.
// pass information through props and you can also pass information with params.
