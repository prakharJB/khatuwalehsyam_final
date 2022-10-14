import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import bgimg from '../Components/assets/images/play-bg.gif'


  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);


//   const responsive1111 = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 10,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 8,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2,
//     },
//   };
//   const filterSongsOnArtist = (songs, selectedArtist) => {
//     const filteredSongs = songs.filter((element) => {
//       return element.artist === selectedArtist.artist;
//     });
//     return filteredSongs;
//   };
//   useEffect(() => {
//     if (currentArtist === null || undefined) {
//       // setDisplaySongs(releaseSong);
//       // setDefaultMusic();
//       navigate('/')
      
//     } 
//     const url = `http://localhost:3100/artist/songs/${currentArtist?._id}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         setDisplaySongs(json);
//         console.log('CONSOLE', json);
//         const parsedDataTwo = json.map((item) => {
//           return { src: item.song, name: item.track, id: item._id };
//         });
//         console.log('PARSED', parsedDataTwo);
//         setMusicTracks(parsedDataTwo);
//         setDisplaySongs(json);
//       })

//       .catch((error) => console.log(error));
//   }, [currentArtist, navigate, setMusicTracks]);
//   const ChangeCurrentSong = (index) => {
//     setTrackIndex(index);
//   };


//   return (
//     <div className='newsong-page'>
//       <div className='container'>
//         <div className='newsng-container'>
//           <div className='listing'>
//             <h2  className='newsong-head' >Songs By Artist</h2>
//             <div className='short-slid'>
             
//             </div>

//             </div>
//             <div className='ul-song'  >
//               <ul className='card-area'>
//               {displaySongs?.map((user, index) => (
//                 <li className='card'>
//                 <Link to='' className='box-img'><img src={user.image} onClick={() => ChangeCurrentSong(index)} /></Link>
//                 <div className='song-name'><Link to='' className='box-song' onClick={() => ChangeCurrentSong(index)}><p>{user.track}</p></Link></div>
//                 </li>
//               ))}
//               </ul>
//             </div>
//           </div>
          
//         </div>
//         <div className='song-para'>
          
//         </div>
//       </div>
   
   
//   )
// }

// export default Artist;

// import React,{useState , useEffect}  from "react";
import tr_img1 from '../Components/assets/images/trending1.png';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';




const Artist=({releaseSong,
    currentArtist,
    setMusicTracks,
    setDefaultMusic,
    setTrackIndex,
    audiofunction , isPlaying, setIsPlaying, selectStyle, setSelectStyle, isPlay})=>{
    const [release, setRelease] = React.useState([]);
    const { pathname } = useLocation();



    const[superData, setSuperData]= useState()
   
    

    const [displaySongs, setDisplaySongs] = useState([]);
      const navigate = useNavigate();
     
    
      
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [currentArtist]);
    
    
      const responsive1111 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
      const filterSongsOnArtist = (songs, selectedArtist) => {
        const filteredSongs = songs.filter((element) => {
          return element.artist === selectedArtist.artist;
        });
        return filteredSongs;
      };
      useEffect(() => {
        if (currentArtist === null || undefined) {
          // setDisplaySongs(releaseSong);
          // setDefaultMusic();
          navigate('/')
          
        } 
        const url = `http://localhost:3100/artist/songs/${currentArtist?._id}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setDisplaySongs(json);
            console.log('CONSOLE', json);
            const parsedDataTwo = json.map((item) => {
              return { src: item.song, name: item.track, id: item._id };
            });
            console.log('PARSED', parsedDataTwo);
           setSuperData(parsedDataTwo)
            setDisplaySongs(json);
          })
    
          .catch((error) => console.log(error));
      }, [currentArtist, navigate, setMusicTracks]);


      const ChangeCurrentSong = (index) => {
        setMusicTracks(superData);
        setSelectStyle(index)
        setTrackIndex(index);
      };
    

    return(
        <div className="trend">
            <div className="trend-area">
            <div className='routes' ><h6 className='rts-rts'><Link className='rts-rts' to={'/'}>Home</Link> -- <Link className='rts-rts'>Top Artist</Link>-- <span className='rts-tag'>{displaySongs[0]?.artist}</span></h6></div>
                <section className="sec-1">
                  
                      <div className="trendimg">
                     
                        <img src={displaySongs[0]?.image}  />
                      
                      </div>
                     <div className="Trending-song">
                              <div className="trnd-img-about">
                            
                                <h1>Top Artist</h1>
                               
                                 <h2>{displaySongs[0]?.artist}</h2>
                                <p>Top Artist hits, refreshed daily</p>
                              </div>
            

                             <div className="trndbtn">
                                 <button className="footer-btn" onClick={() => {
                              const play = audiofunction();
                                     if (play) {
                                  setIsPlaying(false);
                                          } else {
                                        setIsPlaying(true);
                                          }
                                          }}>
                                         {isPlaying === true ? 'Play' : 'Pause'}</button>
             
                               </div>
                   </div>
                </section>
              <section className="sec-2">
                    <div className="trend-song" >
                          <ul className="song-about firstul" >
                            <li className="songabt-img"><p className="imgsong">#</p></li>
                            <li className="songabt">
                               <div className="heading-row">
                                 <div className="track"><p className="heading">Track</p></div>
                                      <div className="artist"><p className="heading">Artist</p></div>
                             </div>
                
                             </li>
                               <li className="songabt-dur"><p className="heading">Duration</p></li>
                           </ul>
                       {displaySongs?.map((user, index) => (
                             <ul  className="song-about"  onClick={() => ChangeCurrentSong(index)}>
                             <li className="songabt-img">
                                <div className="listimg">
                                  <Link to='' className='topart-img'><img src ={selectStyle=== index && isPlay === true ? bgimg:  user.image} onClick={() => ChangeCurrentSong(index)} /></Link>
                                  <div className="playyicon"><i class="fa fa-play-circle-o" aria-hidden="true"></i> </div>
                    
                             </div>
                              </li>
                              <li className="songabt">
                                   <div className="heading-row">
                              <div className="track"><p>{user.track}</p></div>
                         <div className="artist"><p>{user.artist}</p></div>
                           </div>
                  
                          </li>
        
                              <li className="songabt-dur"><p className="heading"><p>{user.duration}</p></p></li>
                    
                            </ul>
                           ))}
           
                        </div>
              </section> 
            </div>
           
        </div>
    );
};
export default Artist;