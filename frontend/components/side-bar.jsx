"use client"

import React from 'react'
import {Button} from "./ui/button"
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {cn } from '../lib/utils'

const SideBar = () => {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <div className='side-bar w-full h-full flex flex-col justify-between items-center'>
        <div className="top">
            <div className="logo">ENI</div>
            <div className="nav flex flex-col gap-4">
                <Link href={"/home/conversation"}>
                    <Button variant="outline" size="icon" className={cn('btn-side', pathName==="/home/conversation" && "bg-emerald-600")}>
                        <Image
                        src={"/assets/images/message.png"}
                        alt='message'
                        width={42}
                        height={42}
                        />
                    </Button>
                </Link>
                
                <Link href={"/home/eni/plan"}>
                  <Button variant="outline" size="icon" className={cn('btn-side', pathName==="/home/eni/plan" && "bg-emerald-600")}>
                    <Image
                    src={"/assets/images/map.png"}
                    alt='message'
                    width={42}
                    height={42}
                    />
                </Button>  
                </Link>
                
                <Link href={"/home/orientation"}>
                    <Button variant="outline" size="icon" className={cn('btn-side', pathName==="/home/orientation" && "bg-emerald-600")}>
                        <Image
                        src={"/assets/images/info.png"}
                        alt='message'
                        width={42}
                        height={42}
                        />
                    </Button>
                </Link>
                <Link href={"/home/orientation"}>
                    <Button variant="outline" size="icon" className={cn('btn-side', pathName==="/home/orientation" && "bg-emerald-600")}>
                        <Image
                        src={"/assets/images/evaluation.png"}
                        alt='message'
                        width={42}
                        height={42}
                        />
                    </Button>
                </Link>
            </div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default SideBar