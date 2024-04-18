import React from 'react'
import './Social.css'
//& ICONS ============================================================================================================
import { FaSpotify } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Social = () => {
 return (
  <div className='flex items-center justify-center space-y-4 sm:space-y-0 flex-wrap mx-auto py-2'>
   <ul className="example-2">

    <li className="icon-content">
     <a data-social="spotify" aria-label="Spotify" href="https://www.spotify.com/"   >
      <div className="filled"></div>
      <FaSpotify />
     </a>
     <div className="tooltip">Spotify</div>
    </li>

    <li className="icon-content">
     <a data-social="pinterest" aria-label="Pinterest" href="https://www.pinterest.com/">
      <div className="filled"></div>
      <FaPinterest />
     </a>
     <div className="tooltip">Pinterest</div>
    </li>

    <li className="icon-content">
     <a data-social="dribbble" aria-label="Dribbble" href="https://dribbble.com/"   >
      <div className="filled"></div>
      <FaDribbble />
     </a>
     <div className="tooltip">Dribbble</div>
    </li>

    <li className="icon-content">
     <a data-social="telegram" aria-label="Telegram" href="https://telegram.org/">
      <div className="filled"></div>
      <FaTelegramPlane />
     </a>
     <div className="tooltip">Telegram</div>
    </li>
   </ul>

   <ul className="example-2 z-10 ">
    <li className="icon-content">
     <a href="https://linkedin.com/" aria-label="LinkedIn" data-social="linkedin">
      <div className="filled"></div>
      <FaLinkedin />
     </a>
     <div className="tooltip">LinkedIn</div>
    </li>

    <li className="icon-content">
     <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
      <div className="filled"></div>
      <FaGithub />
     </a>
     <div className="tooltip">GitHub</div>
    </li>

    <li className="icon-content">
     <a href="https://www.instagram.com/" aria-label="Instagram" data-social="instagram">
      <div className="filled"></div>
      <FaInstagram />
     </a>
     <div className="tooltip">Instagram</div>
    </li>
    <li className="icon-content">
     <a href="https://youtube.com/" aria-label="Youtube" data-social="youtube">
      <div className="filled"></div>
      <FaYoutube />
     </a>
     <div className="tooltip">Youtube</div>
    </li>
   </ul>

  </div>
 )
}

export default Social