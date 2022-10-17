import React,{useCallback,useState, useEffect , useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Menu from './Components/Header'
import './Components/assets/css/style.css'
import Home from './pages/Home';
import Trend from './pages/Trending';
import Artist from './pages/Top-Artist';
import TopBhajan from './pages/Top10-Bhajan';
import Player from './Components/Player';
import Latest from './pages/latest';
import Category from './pages/Category';
import TopPlaylist from './pages/topPlaylist';
import NewReleases from './pages/NewReleases';
import SearchContent from './pages/search';
import Radio from './pages/Radio';
import AllSongs from './pages/Allsong';
import  Pagenotfound from './pages/Pagenotfound';

function App() {
  const [musicTracks, setMusicTracks] = useState([
    {
      id: 1,
      name: ' Haare Ke Sahare Aaja',
      src: 'https://khatuwaleshyam.com/wp-content/uploads/2022/06/Hare-Ka-Sahara-Aaja.mp3',
    },
    {
      id: 2,
      name: 'Najre Jara Mila Le',
      src: 'https://khatuwaleshyam.com/wp-content/uploads/2022/06/Superhit_Offici_getmp3.pro_.mp3',
    },
    {
      id: 3,
      name: 'Mera Shyam Bada Albela',
      src: 'https://khatuwaleshyam.com/wp-content/uploads/2022/06/getmp3.pro-25.mp3',
    },
    
  ]);
  const [releaseSong, setReleaseSong] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const[selectStyle, setSelectStyle] =useState()
  const [isPlay, setIsPlay] = useState(true);
  
  
  
  const fetchSongs = () => {
    const url = 'http://localhost:3100/playlist/songs/633c3487cca1438524d18e91';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setReleaseSong(json))
      .catch((error) => console.log(error));
  };
  const setDefaultMusic = useCallback(() => {
    if (releaseSong && releaseSong?.length > 0) {
      const parsedData = releaseSong.map((item) => {
        return { src: item?.song, name: item?.track, id: item?._id };
      });

      setMusicTracks(parsedData);
    }
  }, [releaseSong]);

  useEffect(() => {
    fetchSongs();
  }, []);


  const player = useRef();
  const audiofunction = () => {
    if (player.current.isPlaying()) {
      player.current.audio.current.pause();
      isPlay(false);
    } else {
      player.current.audio.current.play();
      isPlay(true);
    }
    return player.current.isPlaying();
  };

  return (
   
    <div className="App">
     
     <Router>
     <Menu  setCurrentArtist={setCurrentArtist}  selectStyle={selectStyle}
                  setSelectStyle={setSelectStyle} />
     {/* <Trending/>
     <Newsong/> */}
      <div className='topMargin'>
        <Routes>  
          <Route path='/' element={<Home    setTrackIndex={setTrackIndex}  releaseSong={releaseSong}
                  fetchSongs={fetchSongs}
                  setReleaseSong={setReleaseSong}
                  setMusicTracks={setMusicTracks} 
                  setCurrentArtist={setCurrentArtist}
                  audiofunction={audiofunction}
                  selectStyle={selectStyle}
                  setSelectStyle={setSelectStyle}
                  isPlay={isPlay} />} />
          <Route path='/Trending' element={<Trend  setMusicTracks={setMusicTracks}
                  fetchSongs={fetchSongs}
                  setTrackIndex={setTrackIndex}
                  audiofunction={ audiofunction}
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying} 
                  selectStyle={selectStyle}
                  setSelectStyle={setSelectStyle}
                  isPlay={isPlay}/>}
                   />
          <Route path='/search' element={<SearchContent  setTrackIndex={setTrackIndex} setMusicTracks={setMusicTracks}/>} />
           <Route path='/Top-Artist' element={<Artist releaseSong={releaseSong}
                  currentArtist={currentArtist}
                  setMusicTracks={setMusicTracks}
                  audiofunction={ audiofunction}
                  setDefaultMusic={setDefaultMusic}
                  setTrackIndex={setTrackIndex}
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying} 
                  selectStyle={selectStyle}
                  setSelectStyle={setSelectStyle}
                  isPlay={isPlay} />} />

          <Route path='/TopBhajan' element={<TopBhajan  />} />
          <Route path='/Category' element={<Category currentArtist={currentArtist}
                  setTrackIndex={setTrackIndex}
                  fetchSongs={fetchSongs}
                  setMusicTracks={setMusicTracks}
                  audiofunction={ audiofunction}
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying} 
                  isPlay={isPlay}
                  selectStyle = {selectStyle}
                   setSelectStyle= {setSelectStyle}
                />} />
          <Route path='/latestsong' element={<Latest />} />
          <Route
              path='/newReleases'
              element={
                <NewReleases
                  setMusicTracks={setMusicTracks}
                  fetchSongs={fetchSongs}
                  setTrackIndex={setTrackIndex}
                  audiofunction={audiofunction}
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying}
                  selectStyle={selectStyle}
                  setSelectStyle={setSelectStyle}
                  isPlay={isPlay}
                  
                  />}
            />
            <Route
              path='/TopPlaylist'
              element={
                <TopPlaylist
                  currentArtist={currentArtist}
                  setTrackIndex={setTrackIndex}
                  fetchSongs={fetchSongs}
                  setMusicTracks={setMusicTracks}
                  audiofunction={ audiofunction}
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying}
                  isPlay={isPlay}
                  />}
            
            />
              
           <Route path='/radio' element={<Radio 
         
                setMusicTracks={setMusicTracks}
                audiofunction={ audiofunction}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                fetchSongs={fetchSongs} />} />


              <Route path='/Allbhajan' element={
              <AllSongs 
              fetchSongs={fetchSongs}
              setTrackIndex={setTrackIndex}
              setMusicTracks={setMusicTracks}
             audiofunction={ audiofunction}
              setIsPlaying={setIsPlaying}
                isPlaying={isPlaying} 
                isPlay={isPlay}
               />} />
                <Route path="*" element={< Pagenotfound />} />
        </Routes>
        </div>
        <Footer  releaseSong={releaseSong}
        setTrackIndex={setTrackIndex} 
          setCurrentArtist={setCurrentArtist}
          setMusicTracks={setMusicTracks}
           />
           
        <Player  musicTracks={musicTracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex} 
          player={player}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setIsPlay={setIsPlay}
          selectStyle = {selectStyle}
          setSelectStyle= {setSelectStyle}
          />
       
          
      </Router>
    </div>
    
   
  );
}

export default App;
