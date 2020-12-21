import React, { useState } from "react";
import "./styles/App.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
// import Nav from "./components/Nav";
import data from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function App() {
   //state
   //   console.log(`😸${data}`);

   const [isPlaying, setIsPlaying] = useState(false);

   const [songs, setSongs] = useState(data());
   const [currentSong, setCurrentSong] = useState(songs[3]);
   const [libraryStatus, setLibraryStatus] = useState(false);

   return (
      <div className={`App ${libraryStatus ? "library-active" : ""}`}>
         <nav className="nav">
            <h1>Melody</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
               <>Library</>
               <FontAwesomeIcon icon={faMusic} />
            </button>
         </nav>
         <Song currentSong={currentSong} />
         <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songs={songs}
            setCurrentSong={setCurrentSong}
         />
         <Library
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            libraryStatus={libraryStatus}
         />
      </div>
   );
}

export default App;
