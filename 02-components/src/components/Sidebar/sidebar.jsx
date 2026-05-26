import React from 'react'
import { House } from 'lucide-react';
import { FolderOpenDot } from 'lucide-react';
import { FileCheck } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { FolderBookmark } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Settings } from 'lucide-react';
import './sidebar.css'
const sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="side-menu">
          <div className="s"><h1><House /><a href="">DashBoard</a></h1></div>
          <div className="s"><h1><FolderOpenDot /><a href="">Projects</a></h1></div>
          <div className="s"><h1><FileCheck /><a href="">Tasks</a></h1></div>
          <div className="s"><h1><MessageSquareMore /><a href="">Messages</a></h1></div>
          <div className="s"><h1><ChartLine /><a href="">Analytics</a></h1></div>
          <div className="s"><h1><Calendar /><a href="">Calendar</a></h1></div>
          <div className="s"><h1><FolderBookmark /><a href="">Files</a></h1></div>
          <div className="s"><h1><UserRound /><a href="">Team</a></h1></div>
          <div className="s"><h1><Settings /><a href="">Satting</a></h1></div>
        </div>
        <div className="Upgrade-pass">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="pass">
            <h1>Upgrade to Pro</h1>
            <p>Unloack advance features and more storage</p>
            <button>Upgrade Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sidebar
