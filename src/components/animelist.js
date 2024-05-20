
import GridCard from "./gridcard";
import { useEffect, useState } from 'react';

const AnimeList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem('myAnimeList');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  return (
    <>
 
    <div className="row">
      <h2>My Anime List</h2>
      {list.map((item, index) => (
          <GridCard
            img={item.img}
            title={item.title}
            identity={index}
            url={item.url}
            p1={item.episodes}
            p2={item.score}
            p3={item.rank}
          /> 
      ))}
      </div>   
    </>
  );
};

export default AnimeList;
