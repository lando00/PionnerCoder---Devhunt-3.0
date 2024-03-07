import { UserButton } from '@clerk/nextjs'
import React from 'react'

function HomeHeader({headerLabel}) {
  return (
    <div className='home-header flex justify-between items-center px-8 py-3'>
        <div className="headerLabel">
            {headerLabel}
        </div>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]"
            }
          }}
        />
    </div>
  )
}

export default HomeHeader