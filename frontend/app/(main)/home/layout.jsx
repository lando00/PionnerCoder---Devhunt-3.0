import React from 'react'
import SideBar from '../../../components/side-bar'
import "./styles.css"

function layout({children}) {
  return (
    <div className='home-container'>
        <div className="aside">
            <SideBar/>
        </div>
        <div className="home-children">
          {children}
        </div>
    </div>
  )
}

export default layout