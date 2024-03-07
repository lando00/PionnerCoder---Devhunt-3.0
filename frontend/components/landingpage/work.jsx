'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    // const [width,setWidth] = useState(null)
    // const svgRef = useRef(null)
    useEffect(()=>{
        // if (svgRef.current) {
            // const elW = svgRef.current.offsetWidth;
            // setWidth(elW)

            // gsap.to(".work-overlay-svg path",{
            //     duration:1,
            //     attr: {
            //       d: `M0 0 Q${elW/2} 200, ${elW} 0`
            //     },
            //     ease:"power2",
            //     scrollTrigger:{
            //         trigger:".work-container",
            //         start:"top 60%",
            //         end:"max",
            //     }
            // })

            gsap.to('.work-overlay div',{
                duration:2,
                y:600,
                ease:"power2",
                scrollTrigger:{
                    trigger:".work-container",
                    start:"top 60%",
                    end:"max",
                }
            })

            gsap.to(['.work-container .left .background-img','.work-container .left .absoulute-img.left','.work-container .left .absoulute-img.right'],{
                delay:0.4,
                stagger:0.3,
                opacity:1,
                ease:"power2",
                scrollTrigger:{
                    trigger:".work-container",
                    start:"top 60%",
                    end:"max",
                }
            })
        // }

        gsap.to('.w-text',{
            duration:1.6,
            stagger:0.1,
            opacity:1,
            y:0,
            ease:"elastic.out(0.3,0.3)",
            scrollTrigger:{
                trigger:".work-container",
                start:"top 80%",
                end:"max",
            }
        })

    },[])

  return (
    <div className='container work-container flex gap-x-32 principale-color'>
        <div className="left relative">
            <div className='w-full h-fit sticky top-24'>
            <div className="background-img">
                <Image
                src={"/assets/images/enistudent.svg"}
                alt='work-img'
                width={100}
                height={100}
                className='w-full'
                />
            </div>
            {/* <div className="absoulute-img left absolute top-3">
                <Image
                src={"/assets/images/Intersection.svg"}
                alt='work-img'
                width={80}
                height={80}
                />
            </div> */}
            <div className="absoulute-img right absolute bottom-4 rounded-lg secondary-bg">
                <small className='black-color'>ENI Fanampy</small>
            </div>

            <div className="work-overlay">
                <div>
                    {/* <svg className='work-overlay-svg'>
                        <path d={`M0 0 Q${width/2} 0, ${width} 0`}></path>
                    </svg> */}
                </div>
            </div>
            </div>
        </div>
        <div className="right">
            <div className="content">
                <h2 className='w-text black-color'>Découvrez Votre Nouvelle Ville Universitaire.</h2>
                <p className='w-text black-color'>Découvrez votre nouveau chez-vous avec notre carte interactive de la ville. Trouvez facilement des lieux clés tels que les campus, les résidences étudiantes, les bibliothèques et les points d'intérêt locaux pour vous orienter dans votre environnement universitaire.</p>
                <button className="btn primary w-fit w-text">En savoir plus .</button>
            </div>

            <div className="content">
                <h2 className='w-text black-color'>Visitez Virtuellement Votre Campus.</h2>
                <p className='w-text black-color'>Explorez les salles de classe et les installations universitaires depuis le confort de votre domicile. Grâce à notre fonction de visite virtuelle, familiarisez-vous avec votre futur environnement d'apprentissage et préparez-vous pour le premier jour de cours.</p>
                <button className="btn primary w-fit w-text">En savoir plus .</button>
            </div>

            <div className="content">
                <h2 className='w-text black-color'>Connectez-vous Ensemble Avec Discussion.</h2>
                <p className='w-text black-color'>Échangez des idées, posez des questions et socialisez avec vos pairs grâce à nos salons de discussion en groupe. Créez des liens avec d'autres étudiants partageant les mêmes intérêts et collaborez sur des projets académiques ou des activités extra-scolaires.</p>
                <button className="btn primary w-fit w-text">En savoir plus .</button>
            </div>

            <div className="content">
                <h2 className='w-text black-color'>Guidance Sur-Mesure Pour Votre Parcours.</h2>
                <p className='w-text black-color'>Recevez un soutien personnalisé pour votre parcours universitaire grâce à notre programme d'orientation individualisé. Des conseillers expérimentés vous guideront à travers les différentes étapes de votre formation, vous aidant à choisir vos cours, à définir vos objectifs et à surmonter les obstacles.</p>
                <button className="btn primary w-fit w-text">En savoir plus .</button>
            </div>

            <div className="content">
                <h2 className='w-text black-color'>Évaluez Vos Connaissances Avec Questionnaire.</h2>
                <p className='w-text black-color'>Évaluez votre compréhension et votre progression académique avec notre questionnaire intelligent. Répondez à des questions interactives basées sur vos cours et recevez des retours instantanés pour identifier vos points forts et vos domaines à améliorer.</p>
                <button className="btn primary w-fit w-text">En savoir plus .</button>
            </div>
        </div>
    </div>
  )
}

export default Work