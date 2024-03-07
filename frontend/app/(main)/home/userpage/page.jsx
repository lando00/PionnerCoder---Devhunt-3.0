import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Userpage = () => {
  return (
    <div>
      <UserButton
      afterSignOutUrl='/'
      />
    </div>
  )
}

export default Userpage