import React from 'react'
import HomeHeader from '../../../../components/home-header'
import './styles.css'
import { Button } from '../../../../components/ui/button'

function layout({children}) {
  return (
    <>
    <HomeHeader headerLabel={"DISCUSSION"}/>
    <div className="main-content flex h-full">
        <div className="aside-navigation h-full flex flex-col gap-4 items-center p-4">
            <Button className="bg-gray-400">
                <span>Membres du groupe</span>
            </Button>
        </div>

         {children}
    </div>
        
    </>
  )
}

export default layout