"use client"

import React, { useEffect } from 'react'

import SplitText from '../../lib/Split3.min.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image.js';
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(()=>{

    const teamP = new SplitText('#team-p',{
      type: "lines",
      linesClass: "linesChildren"
   })

   gsap.to(teamP.lines,{
    delay:0.5,
    duration:1,
    opacity:1,
    y:0,
    stagger:0.1,
    scrollTrigger:{
      trigger:".team-section",
      start:"top 80%",
      end:"max",
   }
  })

  const teamH2 = new SplitText('#team-h2',{
    type: "lines",
    linesClass: "linesChildren"
 })

 gsap.to(teamH2.lines,{
  duration:1,
  opacity:1,
  y:0,
  stagger:0.1,
  scrollTrigger:{
    trigger:".team-section",
    start:"top 80%",
    end:"max",
 }
})

gsap.to("#team-cta",{
  delay:0.7,
  duration:1,
  opacity:1,
  y:0,
  scrollTrigger:{
    trigger:".team-section",
    start:"top 80%",
    end:"max",
 }
})


gsap.to(".team-absolute",{
  delay:0.7,
  duration:1,
  opacity:1,
  scrollTrigger:{
    trigger:".team-section",
    start:"top 80%",
    end:"max",
 }
})

  },[])
  return (
    <div className='container relative team-section relative flex flex-col justify-center items-center principale-color text-center gap-y-5'>
        <h2 id='team-h2' className='black-color'>ENSEMBLE VERS LA RÉUSSITE</h2>
        <p id='team-p' className='black-color'>Découvrez une communauté étudiante unie autour du savoir et de la réussite. Échangez, collaborez et grandissez ensemble vers vos objectifs académiques. Rejoignez-nous dès aujourd'hui !</p>
        <button className="btn primary w-fit" id='team-cta'>Commencez.</button>

        <Image
        src={"/assets/images/team-1.svg"}
        alt='team'
        width={62}
        height={62}
        className='team-absolute top'
        />
        <Image
        src={"/assets/images/team-2.svg"}
        alt='team'
        width={62}
        height={62}
        className='team-absolute left top'
        />
        <Image
        src={"/assets/images/team-3.svg"}
        alt='team'
        width={62}
        height={62}
        className='team-absolute left bottom'
        />

        <Image
          src={"/assets/images/team-4.svg"}
          alt='team'
          width={62}
          height={62}
          className='team-absolute right bottom'
          />
        
        <Image
          src={"/assets/images/team-5.svg"}
          alt='team'
          width={62}
          height={62}
          className='team-absolute right top'
          />
    </div>
  )
}

export default Team