import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faAngleLeft,
   faAngleRight,
   faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
   currentSong,
   setIsPlaying,
   isPlaying,
   songs,
   setCurrentSong,
}) => {
   const play = useRef(null); // to select audio element

   const PlaySong = () => {
      // console.log(currentSong.audio);
      // play.current.play();

      if (isPlaying === true) {
         play.current.pause();
         setIsPlaying(!isPlaying);
      } else {
         play.current.play();
         setIsPlaying(!isPlaying);
      }
   };

   //*-----------[ state : for setting time , duration]-------------/

   const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
   });

   const timeUpdateHandler = (e) => {
      setSongInfo({
         currentTime: e.target.currentTime,
         duration: e.target.duration,
      });
      console.log(songInfo.currentTime);

      //!! -----------[ ERROR ]---------------/
      //const current: e.target.currentTime;
      //const duration: e.target.duration;

      //setSongInfo({ ...songInfo, currentTime: current, duration: duration });
   };

   // ? -------------[function : hooked to onChange ; input slider - range]-------/

   const sliderHandler = (e) => {
      console.log(e.target.value);
      setSongInfo({ ...songInfo, currentTime: e.target.value });
      play.current.currentTime = e.target.value;
   };

   // ? --------[ format time ]----------/
   const formatTime = (time) => {
      return (
         Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
   };

   // ?-----------[ skip functionality]-------------/

   const skipHandler = (direction) => {
      const currentIndex = songs.findIndex(
         (song) => song.id === currentSong.id
      );
      if (direction === "skip-frwd") {
         setCurrentSong(songs[(currentIndex + 1) % songs.length]);
         setIsPlaying(false);
      } else if (direction === "skip-back") {
         if ((currentIndex - 1) % songs.length === -1) {
            setCurrentSong(songs[songs.length - 1]);
         } else {
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            setIsPlaying(false);
         }
      }
   };

   // ** return ------------>

   return (
      <div className="player">
         <div className="time-control">
            <p>{formatTime(songInfo.currentTime)}</p>
            <input
               type="range"
               min={0}
               max={songInfo.duration || 0}
               value={songInfo.currentTime}
               onChange={sliderHandler}
            />
            <p>{formatTime(songInfo.duration)}</p>
         </div>
         <div className="play-control">
            <FontAwesomeIcon
               onClick={() => {
                  skipHandler("skip-back");
               }}
               className="skip-back"
               size="2x"
               icon={faAngleLeft}
            />
            <FontAwesomeIcon
               className="play"
               size="2x"
               // *-----------[condition : for play/pause icon show]---------/
               icon={isPlaying ? faPause : faPlay}
               onClick={PlaySong}
            />
            <FontAwesomeIcon
               onClick={() => {
                  skipHandler("skip-frwd");
               }}
               className="skip-frwd"
               size="2x"
               icon={faAngleRight}
            />
         </div>
         <audio
            ref={play}
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            src={currentSong.audio}></audio>
      </div>
   );
};

export default Player;
