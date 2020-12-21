import React from "react";

const LibrarySong = ({ song, setCurrentSong, isPlaying, setIsPlaying }) => {
   const songSelectHandler = () => {
      if (isPlaying === false) {
         setCurrentSong(song);
      } else {
         setIsPlaying(!isPlaying);
         setCurrentSong(song);
      }
   };
   return (
      <div className="library-song" onClick={songSelectHandler}>
         <img src={song.cover} alt="song"></img>
         <div className="description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
         </div>
      </div>
   );
};

export default LibrarySong;
