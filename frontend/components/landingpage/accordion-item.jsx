import Image from 'next/image'
import React from 'react'

const AccordionItem = ({value}) => {
  return (
    <div className='accordion-item'>
        <div className="top">
            <h1 className='black-color faq'>{value.title}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="101" height="39.96" viewBox="0 0 101 39.96">
              <path id="arrow" d="M74.375,39.96a1.931,1.931,0,0,1-1.809-2.682A47.543,47.543,0,0,1,78.343,27.22H5.3a2,2,0,0,1-2-2V17.74a2,2,0,0,1,2-2h73.04A50.062,50.062,0,0,1,72.7,5.683,1.935,1.935,0,0,1,74.515,3h6.823a2.027,2.027,0,0,1,1.528.7,62.851,62.851,0,0,0,17.357,14.267,2.047,2.047,0,0,1,1.08,1.792v3.548a2.049,2.049,0,0,1-1.118,1.812A58.5,58.5,0,0,0,82.867,39.248a2.032,2.032,0,0,1-1.537.712Z" transform="translate(-1.803 -1.5)" fill="none" stroke="#3c0e4e" strokeWidth="3" fillRule="evenodd"/>
            </svg>
        </div>
        <p className='black-color'>{value.description}</p>
    </div>
  )
}

export default AccordionItem