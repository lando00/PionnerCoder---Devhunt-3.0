
import React from 'react'
import { initialProfile } from "../../../lib/initial-profile";
import "./styles.css"
import { redirect } from 'next/navigation';
import InscriptionModal from '../../../components/modals/inscription-modal';


const Home = async ({req}) => {
 const profile = await initialProfile()

 if(profile){
  return redirect(`/home/eni/plan`)
 }

  return <InscriptionModal/>
}

export default Home