"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const Header = () => {
  const tl = gsap.timeline()
  useEffect(()=>{
    gsap.to('.header-title svg text',{
      duration:3,
      strokeDashoffset:0,
      ease:'power2'
    })
    gsap.to(".header-title svg text",{
      delay:2.1,
      duration:0.5,
      stroke: "#02A86A",
      fill:"#02A86A",
      ease:'power2'
    })

    gsap.to([".hero-img.left",".hero-img.right"],{
      delay:2.1,
      duration:1.5,
      transform:"translate(0,0) scale(1) rotate(0deg)",
      opacity:1,
      ease: "elastic.out(0.3,0.3)"
    })

    gsap.to('.hero-txt',{
      delay:2.1,
      y: 0,
      duration:1,
      stagger:0.2,
      opacity:1,
      ease:"elastic.out(0.3,0.3)"
    })
  },[])
  return (
    <div className='container hero-container relative flex flex-col justify-center items-center'>
        <div className="header-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="736" height="144" viewBox="0 0 736 144">
            <defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#05a"/>
              <stop offset="100%" stopColor="#0a5"/>
              </linearGradient>
            </defs>
            <text id="frEsH" pathLength={"1"} transform="translate(2 117)" stroke="#000" strokeWidth="2" fontSize="124" fontFamily="Joyride-Regular, Joyride"><tspan x="0" y="0">rEseau</tspan></text>
          </svg>

          
          <svg xmlns="http://www.w3.org/2000/svg" width="884" height="144" viewBox="0 0 884 144">
            <text id="lOk" transform="translate(2 117)" fill="#3c0e4e" stroke="#000" strokeWidth="2" fontSize="124" fontFamily="Joyride-Regular, Joyride"><tspan x="0" y="0">ÉtuDiant</tspan></text>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="333" height="144" viewBox="0 0 333 144">
            <text id="_2024" data-name="2024" transform="translate(2 117)" fill="#3c0e4e" stroke="#000" strokeWidth="2" fontSize="124" fontFamily="Joyride-Regular, Joyride"><tspan x="0" y="0">Eni</tspan></text>
          </svg>

        </div>
        <div className="header-p pl-80 flex flex-col justify-center gap-y-4">
          <p className='principale-color max-w-96 hero-txt black-color'>Connectez-vous avec un étudiant mentor 
dès votre arrivée sur le campus et découvrez une 
nouvelle façon de naviguer dans la vie universitaire.</p>
          <button className="btn primary w-fit hero-txt">S'inscrire .</button>
        </div>

        <Image
        src={'/assets/images/ENI2.svg'}
        alt='fako'
        width={100}
        height={100}
        className='hero-img left'
        />
         <Image
        src={'/assets/images/ENI1.svg'}
        alt='fako'
        width={100}
        height={100}
        className='hero-img right'
        />

        <Image
        src={'/assets/images/text-circle.svg'}
        alt='fako'
        width={100}
        height={100}
        className='hero-img text-circle'
        />
    </div>
  )
}

export default Header