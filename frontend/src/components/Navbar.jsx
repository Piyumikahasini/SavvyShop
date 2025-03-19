import React, { useState } from 'react'
import {MdCategory, MdContacts, MdHomeFilled, MdShop2} from "react-icons/md"

const Navbar = ({containerStyles}) => {
    
    const [isActive, setIsActive] = useState("home")

  return (

   <nav className={`${containerStyles}`}>
    <a href={'#home'} onClick={()=> setIsActive("home")} className={isActive==="home"? "active-link" : ""}><div className='flexCenter gap-x-1'><MdHomeFilled/>Home</div></a>
    <a href={'#shop'} onClick={()=> setIsActive("shop")} className={isActive==="shop"? "active-link" : ""}><div className='flexCenter gap-x-1'><MdCategory/>Shop</div></a>
    <a href={'#app'} onClick={()=> setIsActive("app")} className={isActive==="app"? "active-link" : ""}><div className='flexCenter gap-x-1'><MdShop2/>Get App</div></a>
    <a href={'#contact'} onClick={()=> setIsActive("contact")} className={isActive==="contact"? "active-link" : ""}><div className='flexCenter gap-x-1'><MdContacts/>Contact</div></a>

   </nav>
  )
}

export default Navbar
