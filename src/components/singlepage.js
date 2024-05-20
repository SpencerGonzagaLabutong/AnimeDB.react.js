import { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";


const Singlepage = () => {
    let location = useLocation();
    let data = Number(location.state);
    
    let [anime, setAnime] = useState([]);

    // animeelist
    useEffect(()=>{
        let getanime = async () =>{
            let list = await fetch("https://api.jikan.moe/v4/anime");
            let info = await list.json();
            // console.log(info.data);
            if (info.data.length > data) {
                setAnime(info.data[data]); // set anime to the object at the index data in the data array
            }
        }

        getanime();
    },[]);
    // animelist

 

    return ( 
        <>
         <div className="row">
             <div className="col-md-12">  
             {anime.images ? <img src={anime.images.jpg.image_url} alt="" /> : null}
               <h1>{anime.title}</h1>
               <h2>SYNOPSIS</h2>
               <p>{anime.synopsis}</p>
               <h2>BACKGROUND</h2>
               <p>{anime.background}</p>
               <p>{anime.character}</p>
    
                    
            </div>
         </div>
        </>
     );
}
 
export default Singlepage;