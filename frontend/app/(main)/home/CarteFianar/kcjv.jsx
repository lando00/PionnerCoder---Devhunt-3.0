import React from 'react'
import HomeHeader from '../../../../components/home-header'
import { Plus } from 'lucide-react'
import { Button } from '../../../../components/ui/button'

function layout({children}) {
  return (
    <>
    <HomeHeader headerLaber={"ENI Location"}/>
    <div className="main-content flex h-full">
        <div className="aside-navigation h-full flex flex-col gap-4 items-center p-4 bg-slate-200">
            <Button>
                <Plus/> <span>Carte Fianara</span>
            </Button>
            <Button>
                <span>Carte Fianara</span>
            </Button>
        </div>

         {children}
    </div>
        
    </>
  )
}

export default layout