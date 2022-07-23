import { useState } from 'react';
import './App.css';
import Songtitles from './components/Songtitles';
import Moodbuttons from './components/Moodbuttons';
import Songs from './SongDatabase/songs';
import Header from './components/Header';
function App() {
  const [songUrl, setsongUrl] = useState("");
  const [songName, setsongName] = useState("...");
  const [mood, setmood] = useState("");
  const [searchVal, setsearchVal] = useState("");
  const [playerthumbnail, setplayerthumbnail] = useState("");
  const playSong = (songSource, songTitle, playerThumbnail) => {
    setsongName(songTitle);
    setsongUrl(songSource);
    setplayerthumbnail(playerThumbnail);
  }

  return <div className='fatherContainer'>
    <Header />
    <div className='audioElement'>
      <img className='playerThumbnail' src={playerthumbnail || "/songplayer/Assets/playerDisc.png"} alt={songName}></img>
      <p>{songName}</p>
      <audio
        controls autoPlay={true} loop={true}
        src={songUrl}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
    <div className='tileContainer'>
      {
        Songs.map((song) => {
          return <Songtitles key={song.SongID}
            thumbnail={song.Thumbnail}
            source={song.Source}
            title={song.Title}
            category={song.Category}
            playFunction={playSong} />

        })
      }
    </div>
    <hr></hr>
    <Moodbuttons setmood={setmood} />
    
    <div className='searchBar'>
    <input placeholder='🔍Search your song..' value={searchVal} onChange={(e) => { setsearchVal(e.target.value) }}></input>

    </div>
      <div className='listTileHolder'>

        {
          !searchVal ? Songs.filter(song => song.Category.includes(mood)).map((item, index) =>
            (<li onClick={() => playSong(item.Source, item.Title, item.Thumbnail)} className='listTiles'>{index + 1}. {item.Title} | {item.Category.toUpperCase()}</li>)) : Songs.filter(song => song.Title.toUpperCase().includes(searchVal.toUpperCase())).map((item, index) =>
              (<li onClick={() => playSong(item.Source, item.Title, item.Thumbnail)} className='listTiles'>{index + 1}. {item.Title} |{item.Category.toUpperCase()}</li>))
        }
    </div>
    <div className='footer'>
      <b>Made By Subhranshu</b>
    </div>
  </div>
}

export default App;
