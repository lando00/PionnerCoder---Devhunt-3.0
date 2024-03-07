"use client"

import React, { useEffect, useState } from 'react'
import InscriptionModal from '../modals/inscription-modal'

const ModalsProvider = () => {
    const [isMounted,setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted) return null
    
    return (
        <>
            {/* <InscriptionModal/> */}
        </>
    )
}

export default ModalsProvider