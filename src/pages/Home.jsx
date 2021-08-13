import React, { useEffect, useState } from 'react';
import { fetchGenres, fetchMovies } from '../api'; 
// styles
import '../css/essential.css';
// componets
import Header from '../components/Header';
import Filter from '../components/Filter';
import MovieCard from '../components/MovieCard';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [origMovieList, setOrigMovieList] = useState([]);
  const [generList, setGenerList] = useState([]);

  // inline styling due to time constraint
  const style = {margin: "16px", fontWeight: "bold"};

  async function populateMovie() {
    let movieResponse = await fetchMovies();
    let movieResponseJson = await movieResponse.json();
    let generesResponse = await fetchGenres();
    let generesResponseJson = await generesResponse.json();
    setGenerList(generesResponseJson);
    const finallist = movieResponseJson.map((movie) => {
      const generList = movie.genre_ids.map((genreId) => {
        let tempGener={}
        generesResponseJson.map((gener) => {
          if (gener.id === genreId){
            tempGener.name = gener.name
            tempGener.id = gener.id
          }
        });
        return {id:tempGener.id, name:tempGener.name}
      })
      return {...movie,genre_ids:generList}
    })
    setOrigMovieList(finallist);
    setMovieList(finallist);
    setLoading(false);
  }

  function containsGenerId(checkedList, gener) {
    const result = checkedList.find((item) => {
     return gener.id === item.id
   })
   return result ? true : false
  }

  function  clearMovie() {
    setMovieList(origMovieList)
  }
 
  function  filterMovie(checkedList) {
   let tempList = [];
   tempList = origMovieList && origMovieList.filter((ele) => {
     return ele.genre_ids && ele.genre_ids.some(item => containsGenerId(checkedList, item))
   })
   setMovieList(tempList)
 }

  useEffect(() => {
    populateMovie();
  }, []);

  return (
    <div>
      <Header />
      <Filter list={generList}  filterMovie={ filterMovie}  clearMovie={ clearMovie} />
      <div>
        <div style={style}>Showing {movieList.length} movies</div>
          {loading ? '' :
          <MovieCard list={movieList} setList={setMovieList} />
        }
      </div>
    </div>
    );
}

export default Home;
