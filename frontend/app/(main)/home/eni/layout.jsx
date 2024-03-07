import React from 'react'
import HomeHeader from '../../../../components/home-header'

const layout = ({children}) => {
  return (
    <div className='eni-plan'>
        <div className="top">
            <HomeHeader headerLabel={"ENI DEPARTEMENT"}/>
        </div>
        <div className="body">
            <div className="side-nav">
                <button className='title'>PLAN DE L'ENI</button>
                <span># salle de classe</span>
                <small># 001 - 002</small>
                <small># 001 - 002</small>
                <small># 001 - 002</small>
                <small># 001 - 002</small>
                <span># administration</span>
                <small># 001 - 002</small>
                <small># 001 - 002</small>
                <small># 001 - 002</small>
                <small># 001 - 002</small>
            </div>
            <div className="children">
              {children}
            </div>
        </div>
    </div>
  )
}

export default layout