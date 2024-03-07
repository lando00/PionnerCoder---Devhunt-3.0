"use client"
import React, { useEffect, useState } from 'react'

const OverlayMenu = () => {

  const [width,setWidth] = useState(null)

  useEffect(()=>{
    const {innerWidth} = window
    setWidth(innerWidth)
  },[])

  return (
    <div className='overlay-menu'>
       <div className="content">
          <div className="overlay-navigation">
              <h1 id='id1'>About</h1>
              <h1 id='id2'>Work</h1>
              <h1 id='id4'>FAQs</h1>
              <h1 id='id3'>Solutions</h1>
              <h1 id='id5'>Contact</h1>
          </div>
          
          <div className="left-contact">
            <button className='btn primary w-fit overlay-text'>S'incrire .</button>
            <button className='btn secondary w-fit overlay-text'>Se connecter</button>
            <span className="upper overlay-text">contacter</span>
            <div>
              <p className='overlay-p overlay-text'>&copy; PioneerCoder01</p>
              <p className='overlay-p overlay-text'>pioneer@coder.com</p>
            </div>
            <div>
              <small className='overlay-coders overlay-text'>Herlin ~ Navas ~ Nicole</small>
              <small className='overlay-coders overlay-text'>Angelo ~ Orlando ~ </small>
            </div>

          </div>
          
          <svg className='overlay-svg'>
            <path d={`M0 0 Q${width/2} 0, ${width} 0`}></path>
        </svg>
       </div> 
    </div>
  )
}

export default OverlayMenu