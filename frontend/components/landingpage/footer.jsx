import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='container footer principale-color'>
        <div className="top flex justify-between items-center">
            <div className="left flex gap-x-5 items-center">
                <Image
                src={"/assets/images/facebook.svg"}
                alt='f'
                width={24}
                height={24}
                />
                <Image
                src={"/assets/images/instagram.svg"}
                alt='insta'
                width={24}
                height={24}
                />
                <Image
                src={"/assets/images/twitterX.svg"}
                alt='x'
                width={24}
                height={24}
                />
                <Image
                src={"/assets/images/github.svg"}
                alt='g'
                width={24}
                height={24}
                />
            </div>
            <div className="middle">
                <ul className='flex gap-x-10 items-center black-color'>
                    <li> <Link href={"#home"}>Accueil</Link></li>
                    <li> <Link href={"#home"}>Fonctionnalité</Link></li>
                    <li> <Link href={"#home"}>Événement</Link></li>
                    <li> <Link href={"#home"}>Faqs</Link></li>
                </ul>
            </div>
            <div className="right">
                <button className="btn secondary">Français</button>
            </div>
        </div>
        <div className="bottom text-center">
            <span>@2024 Pioneer team @copyright reserved</span>
        </div>
    </div>
  )
}

export default Footer