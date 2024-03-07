"use client"
import React, { useEffect } from 'react'

import SplitText from '../../lib/Split3.min.js'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image.js';
gsap.registerPlugin(ScrollTrigger);

const InviteSection = () => {
  useEffect(()=>{
    const tween1 = gsap.to(['.invite-section .left h2 .boxes:nth-child(2n+1)'], {yPercent:-100, repeat:10, ease:"none"})

    gsap.to([tween1], {totalProgress:1, duration:6, ease:"power4.inOut",scrollTrigger:{
        trigger:".invite-section",
        start:"top 80%",
        end:"max",
    }})

    const inviteP = new SplitText('#invite-p',{
      type: "lines",
      linesClass: "linesChildren"
   })

   gsap.to(inviteP.lines,{
    duration:1,
    opacity:1,
    y:0,
    stagger:0.1,
    scrollTrigger:{
      trigger:".invite-section",
      start:"top 80%",
      end:"max",
   }
  })

  const inviteUpper = new SplitText('#invite-upper-txt',{
    type: "chars",
    charsClass: "inviteCharsChildren"
 })

 gsap.to(inviteUpper.chars,{
  duration:0.2,
  opacity:1,
  y:0,
  stagger:0.06,
  ease:"power2",
  scrollTrigger:{
    trigger:".invite-section",
    start:"top 80%",
    end:"max",
 }
})

    const inviteH1 = new SplitText('#invite-h1',{
      type: "words",
      wordsClass: "inviteWordsChildren"
    })

    gsap.to(inviteH1.words,{
    duration:1,
    opacity:1,
    y:0,
    stagger:0.1,
    ease:"power2",
    scrollTrigger:{
      trigger:".invite-section",
      start:"top 80%",
      end:"max",
    }
    })


  },[])
  return (
    <div className='container invite-section'>
        <div className="left">
            <div id='invite-upper'>
            <span className='upper uppercase invite-upper  white-color' id='invite-upper-txt'>Événements</span>
            </div>
            <h2 className='white-color'>
              <div className="boxes">
                <div className="box">2</div>
                <div className="box">2</div>
              </div>
              <div className="boxes">
                <div className="box">0</div>
                <div className="box">0</div>
              </div>
              <div className="boxes">
                <div className="box">2</div>
                <div className="box">2</div>
              </div>
              <div className="boxes">
                <div className="box">4</div>
                <div className="box">4</div>
              </div>
            </h2>
            <p className='invite-p white-color' id='invite-p'>Joignez-vous à notre journée d'accueil spéciale pour les nouveaux étudiants ! Découvrez la vie universitaire, rencontrez le personnel et les camarades, participez à des activités amusantes et enrichissantes. C'est le début d'un voyage académique inoubliable - rejoignez-nous maintenant !</p>
        </div>
        <div className="right rounded-lg">
            <Image
            src={"/assets/images/recep.svg"}
            alt='invt-img'
            width={100}
            height={100}
            />
        </div>
    </div>
  )
}

export default InviteSection