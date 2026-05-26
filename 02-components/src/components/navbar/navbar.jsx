import React from 'react'
import'./navbar.css'
import { Menu } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Mail } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { SeparatorHorizontal } from 'lucide-react';
import { Search } from 'lucide-react';
import Profile from '../../assets/profile.png'


const navbar = () => {
  return (
    <div>
      <div className="parent-nav">
      <div className="navbar">
        <div className="logo">
          
          <Menu />
          <div className="heading">
               <div className="logopic"><SeparatorHorizontal /></div>
          <h1>Student</h1>
          </div>
        </div>
        <div className="search-bar">
             <Search className='search-icon' size={18}  />
         <input type="text" name="" id="search" placeholder='Search here....' />
        </div>
        <div className="end-nav">
          <Bell />
            <Mail />
          <div className="profile">
            <img src={ Profile} alt="profile" />
            <ChevronDown />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default navbar
