import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
   songs,
   setCurrentSong,
   isPlaying,
   setIsPlaying,
   libraryStatus,
}) => {
   return (
      <div className={`library ${libraryStatus ? "active-library" : ""}`}>
         <h2>Library</h2>
         <div className="library-songs">
            {/* <LibrarySong/> */}
            {songs.map((song) => (
               <LibrarySong
                  song={song}
                  setCurrentSong={setCurrentSong}
                  songs={songs}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
               />
            ))}
         </div>
      </div>
   );
};

export default Library;
