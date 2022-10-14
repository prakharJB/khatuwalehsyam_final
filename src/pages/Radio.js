import React,{useState, useEffect}  from "react";
import radioimg from '../Components/assets/images/radioimg.png'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Radio = ({
  
    setMusicTracks,
    audiofunction,
    setPlaylist, isPlaying, setIsPlaying, 
  }) =>{
    const [allSong, setAllSong] = React.useState([]);
    const [radio, setRadio] = React.useState([]);
    
    


    useEffect(() => {
      
      const url = `http://localhost:3100/songs`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
        
          console.log('CONSOLE', json);
          const parsedDataFour = json.map((item) => {
            return { src: item.song, name: item.track, id: item._id };
          });
          console.log('PARSED', parsedDataFour);
          setMusicTracks(parsedDataFour);
          setRadio(json);
        })
  
        .catch((error) => console.log(error));
    }, []);
  
      


  return (
<div className="araeaaaa">
<h6 className='radio-rts-rts'>You Are Now Listening to Shri KhatuShyam Non-Stop Radio</h6>
      <div className="radio-img">
          <img src={radioimg} />
          </div>
          <div className='trndbtn'>
              <button className='footer-btn' 
               onClick={() => {
                  const play = audiofunction();
                  if (play) {
                    setIsPlaying(false);
                  } else {
                    setIsPlaying(true);
                  }
                }}>
               {isPlaying === true ? 'Play' : 'Pause'}
              </button>
            </div>
      
</div>

  );
              }


export default Radio;