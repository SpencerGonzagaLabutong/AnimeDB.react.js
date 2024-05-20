
import { useState, useEffect } from "react";
import GridCard from "./gridcard";
import Search from "./search";

const TopAnime = () => {

    let [ topanime, setTopAnime] = useState([]);
    let [filteredAnime, setFilteredAnime] = useState([]);
    let [list, setList] = useState([]); 

    // Top Anime
      useEffect(()=>{
        let gettopanime = async () =>{
            let list = await fetch("https://api.jikan.moe/v4/top/anime");
            let info = await list.json();
            // console.log(info.data);
            setTopAnime(info.data);
        }

        gettopanime();
        },[]);
    // Top Anime

    // filter
    const handleSearch = (searchTerm) => {
      
      // Filter anime based on the search term
      const filtered = topanime.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredAnime(filtered);
    };
    // filter

           // Add to list
           const handleAddToList = (item) => {
            const newList = [...list, item];
            setList(newList);
            localStorage.setItem('myAnimeList', JSON.stringify(newList));
            alert('added');
          };

  return (
    <>
    {/* search */}
    <Search handleSearch={handleSearch} />
    
      <div className="row">
      {filteredAnime.map((item, index) => (
          <GridCard
            img={item.images.jpg.image_url}
            title={item.title}
            identity={index}
            url={item.url}
            p1={item.episodes}
            p2={item.score}
            p3={item.rank}
            handleAddToList={handleAddToList}
          /> 
      ))}
      </div>
    {/* search */}

    <div className="row g-3 m-2">
        <h2>TOP ANIME</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Episodes</th>
              <th scope="col">Score</th>
              <th scope="col">Rank</th>
              <th scope="col">More Info</th>
            </tr>
          </thead>
          <tbody>
            {topanime.map((props) => (
              <tr>
                <td><img src={props.images.jpg.image_url} alt="" /></td>
                <td>{props.title} <br /> {props.synopsis}</td>
                <td>{props.episodes}</td>
                <td>{props.score}</td>
                <td>{props.rank}</td>
                <td><a href={props.url} className='btn btn-dark'>Learn More</a></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  );
};

export default TopAnime;
