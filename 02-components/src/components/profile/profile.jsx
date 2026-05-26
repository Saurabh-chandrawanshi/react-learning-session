import React from 'react'
import profile1 from '../../assets/profile1.jpg'
import { FolderBookmark, Frown } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import './profile.css'
import { RiFolderUserLine , RiGroupLine, RiUserAddLine } from 'react-icons/ri';
const profile = () => {
  return (
    <div>
       <div className="main-profile">
      <div className="parent">

      <div className="left-profile">
        <img src={profile1} alt="image" />
      
      <div className="center-profile">
        <h1> Sachin Chandrawanshi</h1>
        <h3>Full Stack Developer</h3>
        <p>Passionate developer who loves building beautifull and functional web application always learning new things</p>
        <div className="buttons">
  <button>View Profile</button> 
  <button>Edit Profile</button> 
  <button>Download</button>  
      </div>
      </div>
      </div>
      <div className="right-profile">
        <div className="follower"><span className='follow-icon'><FolderBookmark /></span><a href="">Projects<h3>24</h3></a> </div>
        <div className="follower"><span className='follow-icon'><RiGroupLine /></span><a href="">Followers<h3>1.2k</h3></a> </div>
        <div className="follower"> <span className='follow-icon'><UserRoundPlus /></span><a href=""> Following<h3>320</h3></a></div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default profile
