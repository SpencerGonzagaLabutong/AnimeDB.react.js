import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';
import Home from "./components/home";
import TopAnime from "./components/topanime";
import NavBar from "./components/navbar";
import Singlepage from "./components/singlepage";
import AnimeList from "./components/animelist";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Footer from "./components/footer";
import bannerVideo from './video/banner.mp4';
import logo from './video/akatsuki.png';


function App() {


  return (
    <>
    <BrowserRouter>
        <NavBar vid={bannerVideo} img={logo}></NavBar>
        <Routes>
  
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/topanime" element={<TopAnime></TopAnime>}></Route>
            <Route path="/modal" element={<Singlepage></Singlepage>}></Route>
            <Route path="/myanime" element={<AnimeList></AnimeList>}></Route>
 
 
        </Routes> 
        <Footer></Footer>
     </BrowserRouter>
    </>
  );
}

export default App;
