import React from 'react'
import './productCard.css'
const productCard = () => {
  return (
    <div>
       <div className="main-container">
        {/* nav bar start */}
        <div className="navbar">
          <nav className='logo-web'>
             <Handbag  className='handbag' size={40}/>
            <h1 className='logo'>Student<span className='store'>Store</span></h1>
          </nav>
          <ul className='nav-links'>
           <li><a href="">Home</a></li>
           <li><a href="">Products</a></li>
           <li><a href="">About</a></li>
           <li><a href="">Contact</a></li>
          </ul>
          {/* right navbar */}
          <div className="nav-btn">
             <button className='wishlist'><Heart size={18} />
             <span>Wishlist(3)</span></button>
            <button className='add-to-card'><RiShoppingCart2Fill size={18} /></button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default productCard
