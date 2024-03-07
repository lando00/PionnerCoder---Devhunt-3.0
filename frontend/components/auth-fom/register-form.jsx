'use client'

import React, { useEffect, useState } from 'react'
import { Input } from "../ui/input"
import { Button } from '../ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"


import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
   const router = useRouter()

    const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
    const onSubmit = async (data)=>{
      console.log(data)
      const res = await axios.post("/api/register",data)
      
      console.log(data,res)
      router.refresh()
      reset()
      window.location.reload()
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="matricule">Imatricule</label>
            <Input name="matricule" type="text" 
            placeholder="Entrer votre matricule..." 
            {...register('matricule', { required: 'Vous devez remplir votre matricule!'})}/>
            {errors.matricule && <span className="error">{errors.matricule.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="niveau">Niveau</label>

            <select name='niveau' {...register('niveau', { required: 'Veiller choisir un niveau!'})}>
              <option >Veiller choisir un niveau</option>
              <option value="L1">L1</option>
              <option value="L2">L2</option>
              <option value="L3">L3</option>
              <option value="M1">M1</option>
              <option value="M2">M2</option>
            </select>

            {errors.niveau && <span className="error">{errors.niveau.message}</span>}
            {/* {errors.niveau && <span className="error">{errors.niveau.message}</span>} */}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Address</label>
            <Input name="phone" type="text" 
            placeholder="Votre telephone..." 
            {...register('phone', { required: 'Veiller fournir un numero!'})}/>
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="adresse">Address</label>
            <Input name="address" type="text" 
            placeholder="Votre adresse..." 
            {...register('adresse', { required: 'Vos dever donner votre adresse!'})}/>
            {errors.adresse && <span className="error">{errors.adresse.message}</span>}
          </div>
          <Button type="submit" className="primary">Enregistrer</Button>
        </form>
  )
}

export default RegisterForm