import React from 'react'
import { Link } from "react-router-dom"
import {RiYoutubeFill , RiInstagramFill, RiTwitterFill, RiGithubFill, RiLinkedinFill, RiDribbbleFill, } from "react-icons/ri"

const SocialIcons = () => {
  return (
    <div className="flex gap-6 pr-4">
      <Link to={''} className="text-[#08d9d6] text-2xl hover:translate-y transition-all duration-500"><RiYoutubeFill /></Link>
      <Link to={''} className="text-[#f08a5d] text-2xl hover:translate-y transition-all duration-500"><RiInstagramFill /></Link>
      <Link to={''} className="text-[#ff2e63] text-2xl hover:translate-y transition-all duration-500"><RiTwitterFill /></Link>
      <Link to={''} className="text-[#eaeaea] text-2xl hover:translate-y transition-all duration-500"><RiLinkedinFill /></Link>
      <Link to={''} className="text-[#f9ed69] text-2xl hover:translate-y transition-all duration-500"><RiDribbbleFill /></Link>
      <Link to={''} className="text-[#5272f2] text-2xl hover:translate-y transition-all duration-500"><RiGithubFill /></Link>


    </div>
  )
}

export default SocialIcons
