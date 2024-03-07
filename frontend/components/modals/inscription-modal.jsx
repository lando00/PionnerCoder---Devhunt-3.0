"use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "../ui/dialog"

import RegisterForm from "../auth-fom/register-form"

import { useModal } from '../../hooks/use-modal-hook'



const InscriptionModal = () => {
  
  const [isMounted, setIsMounted] = useState(false);
  // const {isOpen, type, onClose} = useModal()

  // const isModalOpen = isOpen && type ==="registerModale"

// const handleClose = ()=>{
//     onClose()
// }

useEffect(()=>{
  setIsMounted(true)
},[])

if(!isMounted) return null

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px] auth">
        <DialogHeader>
          <DialogTitle className="auth-title">Création de compte</DialogTitle>
          <DialogDescription>
            Completer les champs suivant pour continuer votre inscription.
          </DialogDescription>
        </DialogHeader>
        <RegisterForm/>
      </DialogContent>
    </Dialog>
  )
}

export default InscriptionModal