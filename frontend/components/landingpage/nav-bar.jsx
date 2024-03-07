"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import MenuBtn from './menu-btn'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  
  const headerRef = useRef(null)

  useEffect(()=>{
    const showHeader = gsap.fromTo(
      headerRef.current,{
        duration:1,
        top:-100
      } , {
        duration:1,
          top: 0,
          duration: 0.3
      }
  ).progress(1);

  ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self)=>{
          self.direction === -1 ?
          showHeader.play() :
          showHeader.reverse()
      }
  })

  gsap.fromTo(
    headerRef.current,{
      duration:1,
      top:-100,
      opacity:0
    } , {
      delay:1,
      duration:1,
      top: 0,
      opacity:1,
      ease: "power2"
    }
)

  },[])
  return (
    <header ref={headerRef} >
      <div className='container nav-bar flex justify-between items-center py-3 principale-color'>
          <div className="logo flex flex-col items-center">
              <span className='text-xl uppercase font-semibold'>MIZATRA</span>
              <small className='text-xs prinpale-bg px-3 py-1'>Fiainana Vaovao</small>
          </div>
          <nav>
            <ul className='flex items-center justify-center gap-x-6'>
              <li className='black-color active'><Link href="#home">Accueil</Link></li>
              <li className='black-color'><Link href="#home">Fonctionnalité</Link></li>
              <li className='black-color'><Link href="#home">Événement</Link></li>
              <li className='black-color'><Link href="#home">Faqs</Link></li>
            </ul>
          </nav>
          <div className="cta flex items-center gap-x-4">
              <Link href={"/register"}><button className='btn primary'>S'incrire .</button></Link>
              <Link href={"/login"}><button className='btn secondary'>Se connecter</button></Link>
          </div>
          <MenuBtn/>
      </div>
    </header>
  )
}

export default NavBar