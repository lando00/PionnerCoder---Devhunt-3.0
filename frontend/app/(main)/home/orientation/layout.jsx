import React from 'react'
import HomeHeader from '../../../../components/home-header'

const layout = ({children}) => {
  return (
    <div className='eni-plan'>
        <div className="top">
            <HomeHeader headerLabel={"ENI DEPARTEMENT"}/>
        </div>
        <div className="body">
         {children}
        </div>
    </div>
  )
}

export default layout