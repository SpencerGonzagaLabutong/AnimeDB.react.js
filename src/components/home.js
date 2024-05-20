
import GridCard from "./gridcard";
import Search from "./search";
import { useState, useEffect } from "react";




const Home = () => {

    let [anime, setAnime] = useState([]);
    let [filteredAnime, setFilteredAnime] = useState([]);
    let [list, setList] = useState([]); 
  

    // animeelist
    useEffect(()=>{
        let getanime = async () =>{
            let list = await fetch("https://api.jikan.moe/v4/anime");
            let info = await list.json();
            console.log(info.data);
            setAnime(info.data);
        }

        getanime();
    },[]);
    // animelist

    // filter
    const handleSearch = (searchTerm) => {
        
        // Filter anime based on the search term
        const filtered = anime.filter((item) =>
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
               handleAddToList={handleAddToList} // Pass the function as a prop
            /> 
        ))}
        </div>
        {/* search */}

        {/* animelist */}
        <div className="row g-3 m-2">
        <h2>AnimeList</h2>
        {anime.map((item, index) => (
            <GridCard
              
              img={item.images.jpg.image_url}
              title={item.title}
              identity={index}
              url={item.url}
              p1={item.episodes}
              p2={item.score}
              p3={item.rank}
              handleAddToList={handleAddToList} // Pass the function as a prop
            />  
        ))}
        </div>
        {/* animelist */}

        
        </>
     );
}


 
export default Home ;