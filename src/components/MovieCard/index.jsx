import React from 'react';
// utils
import { sortByPopularity, validArray } from '../../utils';
// components
import RatingBox from '../RatingBox';
// Style
import styles from './style/movieCard.module.css';

function MovieCard({ list, setList }) {

  function getRate(id, value) {
    let tempList = [];
    tempList = list.map((ele) => {
      const tempEle = ele;
      if (id === tempEle.id) {
        tempEle.vote_average = value
      }
      return tempEle
    })
    setList(tempList)
  }

  function getValue(item){
    let value = item;
    if (item > 10)
      value = Math.floor(item)
    else if(item < 3)
      value = 3
    else
      value
    return value.toFixed(1);
  }

  function renderList(item) {
    return (
      <section className={styles.content} key={item.id}>
        <div><img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} width="200px" height="200px" /></div>
        <div className={styles.detailBody}>
          <h2>{item.original_title}</h2>
          <p>{item.overview}</p>
          <RatingBox
            decrement={() => getRate(item.id, item.vote_average <= 3 ? item.vote_average : (item.vote_average - 0.5))}
            increment={() => getRate(item.id, item.vote_average >= 10 ? item.vote_average : (item.vote_average + 0.5))}
            value={getValue(item.vote_average)}
          />
          <p><span className="bold">Popularity: </span>{item.popularity}</p>
          <p><span className="bold">Genres: </span>{item.genre_ids.map((generitem)=> {
            return <span key={generitem.id} className={styles.badge}>{generitem.name}</span>
          })}</p>
        </div>
      </section>
    );

  }

  return (
    <>
      {validArray(list) && list.sort(sortByPopularity).map(renderList)}
    </>
  );
}

export default MovieCard;
