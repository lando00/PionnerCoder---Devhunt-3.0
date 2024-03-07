import Image from 'next/image'
import React from 'react'

function IndividualClass() {
  return (
    <div className='individual-class'>
        <span># salle 001 - 002</span>
        <Image
        src={"/assets/images/s01.svg"}
        alt='salle'
        width={200}
        height={200}
        />
    </div>
  )
}

export default IndividualClass