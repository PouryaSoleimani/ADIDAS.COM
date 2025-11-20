import React, { useEffect, useRef } from 'react'
import { SiAdidas } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AllinVideoPart = () => {
  useEffect(() => {
    vidRef.current.play();
  }, []);
  const vidRef = useRef();
  const vidPause = () => {
    vidRef.current.pause();
  };
  const vidPlay = () => {
    vidRef.current.play();
  };
  return (
    <>
      <video
        autoPlay
        loop
        muted
        disablePictureInPicture
        src="/videos/adidas, all in.mp4"
        ref={vidRef}
        className="w-full relative z-0"
      />
      {/* NEW COLLECTION ===============================================================================================================*/}
      <div className="flex justify-end h-full flex-col px-4 md:px-10 py-4 z-30 -translate-y-[11rem] sm:-translate-y-[10rem] md:-translate-y-[13rem] space-y-3 sm:space-y-4">
        <h1
          id="newCollection"
          className="text text-white text-2xl md:text-5xl font-extrabold tracking-tighter leading-tight z-30"
        >
          NEW COLLECTION 2024 IS NOW AVAILABLE{" "}
        </h1>
        <button className="button text-xl md:text-5xl w-[7rem] h-[3rem] font-extrabold tracking-tighter leading-tight sm:w-[10rem] z-30">
          <Link to="/products/all">
            LET'S GO ! <span>LET'S GO !</span>
          </Link>
        </button>
        {/* PLAY AND PAUSE */}
        <div className="flex space-x-2">
          <button
            onClick={vidPlay}
            className="md:px-4 md:p-4 rounded-full duration-300 hover:bg-black hover:text-white flex items-center justify-center"
          >
            <FaPlay className="text-white w-5 h-5" />
          </button>
          <button
            onClick={vidPause}
            className="md:px-4 md:p-4 rounded-full duration-300 hover:bg-black hover:text-white flex items-center justify-center"
          >
            <FaPause className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default AllinVideoPart
