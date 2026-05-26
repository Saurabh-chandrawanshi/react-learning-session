import React from 'react'
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile' 
import Sidebar from './components/Sidebar/sidebar'
import Second from './components/second/second'

const App = () =>{
  return (
    <div> 
       <Navbar/>
       <div className="parent-web">
          <Sidebar/>
          <div className="second-web">
             <Profile />
             <Second />
          </div>
       
       
        </div>
     
    </div>
    
  )
}

export default App
