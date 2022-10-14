import React,{useState , useEffect}  from "react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import bgimg from '../Components/assets/images/play-bg.gif'

const TopPlaylist = ({
  setMusicTracks,
  setTrackIndex,
  user,
  currentArtist,
  fetchSongs,
  audiofunction, isPlaying, setIsPlaying, isPlay 
 
}) => {
  const [release, setRelease] = React.useState([]);
  const[superData, setSuperData]= useState()
  const [playlist, setPlaylist] = useState([]);
  const[selectStyle, setSelectStyle] = useState()
  const navigate = useNavigate();
  const { pathname } = useLocation();
 
  
  

  useEffect(() => {
    if (currentArtist === null || undefined) {
      navigate('/');
    }
    const url = `http://localhost:3100/playlist/songs/${currentArtist?._id}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPlaylist(json);
        console.log('CONSOLE', json);
        const parsedDataTwo = json.map((item) => {
          return { src: item.song, name: item.track, id: item._id };
        });
        console.log('PARSED', parsedDataTwo);
        setSuperData(parsedDataTwo);
       
      })

      .catch((error) => console.log(error));
  }, [currentArtist]);

  const ChangeCurrentSong = (index) => {

    setMusicTracks(superData);
    setSelectStyle(index)
    setTrackIndex(index);
    console.log('this is song index---->', index);
    setIsPlaying(false);
  };

  const SetIndexToZero = (index) => {
    setTrackIndex(0);
    console.log('this is current index', index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentArtist]);

  return (
    <div className='trend'>
      <div className='trend-area'>
      <div className='routes' ><h6 className='rts-rts'><Link className='rts-rts' to={'/'}>Home</Link> -- <Link className='rts-rts'>Top Playlist</Link>-- <span className='rts-tag'>{currentArtist.title}</span></h6></div>
        <section className='sec-1'>
          <div className='trendimg'>
            <img src={currentArtist?.image} />
          </div>
          <div className='Trending-song'>
            <div className='trnd-img-about'>
              <h2>{currentArtist?.title}</h2>
              <p>Top trending hits, refreshed daily</p>
  
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
        </section>
        <section className='sec-2'>
          <div className='trend-song'>
            <ul className='song-about'>
              <li className='songabt-img'>
                <p className='imgsong'>#</p>
              </li>
              <li className='songabt'>
                <div className='heading-row'>
                  <div className='track'>
                    <p className='heading'>Track</p>
                  </div>
                  <div className='artist'>
                    <p className='heading'>Artist</p>
                  </div>
                </div>
              </li>
              <li className='songabt-img'>
                {' '}
                <Link to='' className='anchor-foo'>
                  <p className='imgsong'>
                    <i className='fa fa-heart-o' aria-hidden='true'></i>
                  </p>
                </Link>
              </li>
              <li className='songabt-img'>
                <p className='imgsong'>
                  <i class='fa fa-ellipsis-v' aria-hidden='true'></i>
                </p>
              </li>
              <li className='songabt-dur'>
                <p className='heading'>Duration</p>
              </li>
            </ul>
            {playlist.map((user, index) => (
              <ul className='song-about'  onClick={() => ChangeCurrentSong(index)}>
                <li className='songabt-img'>
                  <div className='listimg'>
                    <img
                      src={selectStyle=== index && isPlay === true? bgimg:  user.image}
                      onClick={() => ChangeCurrentSong(index)}
                    />
                    <div className='playyicon'>
                      <i class='fa fa-play-circle-o' aria-hidden='true'></i>{' '}
                    </div>
                  </div>
                </li>
                <li className='songabt'>
                  <div className='heading-row'>
                    <div className='track'>
                      <p>{user.track}</p>
                    </div>
                    <div className='artist'>
                      <p>{user.artist}</p>
                    </div>
                  </div>
                </li>
                <li className='row-item'>
                  <p>{user.duration}</p>
                </li>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default TopPlaylist;