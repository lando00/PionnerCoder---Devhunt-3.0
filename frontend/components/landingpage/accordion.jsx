"use client"

import React, { useEffect } from 'react'
import AccordionItem from './accordion-item'

const Accordion = () => {

  useEffect(()=>{
    const accordions = document.querySelectorAll('.accordion-item')
    
    accordions.forEach((accordion)=>{
      accordion.addEventListener('click',(e)=>{
        e.stopPropagation()

        accordions.forEach(acc=>{
          acc.classList.remove('active')
        })

        e.target.classList.add('active')
         
      })
    })
  },[])
  const data = [
    {
      title: "Comment participer aux événements ?", description: `Pour participer aux événements, connectez-vous et cliquez sur la section "Événements". Choisissez celui qui vous intéresse et suivez les instructions pour vous inscrire. Profitez-en pour interagir avec d'autres participants via les forums de discussion intégrés.`
    },
    {
      title: "Comment trouver des partenaires d'étude ?", description: `Pour trouver des partenaires d'étude, accédez à la section "Partenaires d'Étude" dans l'application. Recherchez des groupes existants ou créez le vôtre. Utilisez les outils intégrés pour planifier des réunions et partager des ressources avec vos partenaires d'étude.`
    },
    {
      title: "Comment puis-je accéder à la visite virtuelle du campus ?", description: `Pour accéder à la visite virtuelle de notre campus, connectez-vous à l'application et recherchez la section "Visite Virtuelle" ou "Campus". Cliquez sur l'option de visite virtuelle pour explorer les différents bâtiments, installations et espaces du campus depuis le confort de votre domicile. Profitez d'une expérience immersive pour vous familiariser avec votre environnement universitaire et découvrir les points d'intérêt principaux.`
    },
    {
      title: "Comment obtenir une guidance personnalisée ?", description: `Découvrez comment accéder à des conseils sur mesure pour votre parcours académique via l'application.`
    },
  ];
  
  return (
    <div className='container accordion'>
      {data.map((value,index)=>{
        return(
          <AccordionItem key={index} value={value}/>
        )
      })}

      <button className='btn primary w-fit'>En savoir plus</button>
    </div>
  )
}

export default Accordion