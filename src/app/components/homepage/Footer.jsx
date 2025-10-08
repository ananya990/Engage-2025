import React from 'react'
import { FaInstagram, FaGlobe, FaYoutube, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <>
        <footer className="bg-black h-12 w-full flex items-center justify-center mt-8">
      <div className="flex space-x-6 text-white">
        <a href="https://www.instagram.com/ncumomentum/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-pink-500 transition duration-200" size={20} />
        </a>
        <a href="https://momentum.ncuindia.edu/" target="_blank" rel="noopener noreferrer" aria-label="Website">
          <FaGlobe className="hover:text-blue-400 transition duration-200" size={20} />
        </a>
        <a href="https://www.youtube.com/channel/UCBbpxkdsOHEVokkCMMxDD8A" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube className="hover:text-red-500 transition duration-200" size={20} />
        </a>
        <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord className="hover:text-indigo-400 transition duration-200" size={20} />
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer
