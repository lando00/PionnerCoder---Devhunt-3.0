import Link from 'next/link'
import React from 'react'
import IndividualClass from '../../../../../components/individual-class'

const Plan = () => {
  return (
    <div className='plan-class'>
      <div className="top">
        <h1>Liste salle de classe</h1>
        <div>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
        </div>
      </div>

      <div className="top">
        <h1>Administration</h1>
        <div>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
          <Link href={"#"}>
            <IndividualClass/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Plan