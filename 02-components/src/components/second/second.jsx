import React from 'react'
import { Rocket } from 'lucide-react';
import { Clock9 } from 'lucide-react';
import { WifiPen } from 'lucide-react';
import { Trophy } from 'lucide-react';

import { CircleCheckBig } from 'lucide-react';
import './second.css'
const second = () => {
  return (
    <div>
     <div className="second-profile">
        <div className="cards-list">

          <div className="cards">
             <p ><Rocket className='c1' /></p>
            <h4>Total Projects</h4>
            <h1>24</h1>
            <p><span>12%</span>this month</p>
          </div>

          <div className="cards">
           <p > <CircleCheckBig className='c2' /></p>
            <h4>Tasks Completed</h4>
            <h1>128</h1>
            <p><span>18%</span>This Month</p>
          </div>

          <div className="cards">
            <p ><WifiPen className='c3'/></p>
             
            <h4>Client Reviews</h4>
            <h1>4.9</h1>
            <p><span>8%</span>This Month</p>
          </div>

          <div className="cards">
            <p > <Clock9 className='c4'/></p>
            
            <h4>Hours Worked</h4>
            <h1>312</h1>
            <p><span>15%</span>This Month</p>
          </div>

          <div className="cards">
            <p ><Trophy className='c5'/></p>
            
            <h4>Achivments</h4>
          <h1>16</h1>
          <p><span>10% </span>This Month</p></div>
          
        </div>
       </div>
    </div>
  )
}

export default second
