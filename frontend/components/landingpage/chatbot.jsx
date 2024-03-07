"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import {sendQ} from "../../lib/data"

const ChatBot = () => {

    const [chat,setChat] = useState(false)
    const [input,setInput] = useState("")
    console.log(input)
    const [reponsbot,setresponsbot] = useState("")
    const [me,setme] = useState("")

    console.log(reponsbot)


    const handleSub = () =>{
        axios
        .get(`http://192.168.0.100:8000/api/question-avance/${input}`)
        .then(res=>{
            setme(input)
            if(res.data){
                setInput(" ")
                setTimeout(() => {
                    setresponsbot(res.data[0].label)
                }, 1500);
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div>
        <div>
            {
                chat && <div className='chabotcontent fixed right-8 bottom-36 flex justify-between flex-col'>
                <div className="top flex items-center gap-4">
                    <div className="l">
                    <Image src={"/assets/images/chatbot.gif"} alert="chatbot" width={100} height={100} className='w-14 h-14 rounded-full' />
                    </div>
                    <div className="r flex flex-col">
                        <strong>MizatraBot</strong>
                        <small>Je suis mizatraBot</small>
                    </div>
                </div>
                <div className="center mt-8 mb-8 flex flex-col gap-4">
                    <p>Bonjour, je suis MizatraBot !</p>
                    {me && <h1 className='me'>{me}</h1>}
                    {reponsbot && <p>{reponsbot}</p>}
                </div>
                <div className="bottom flex items-center gap-3 rounded-sm border border-gray-500 p-2 ">
                    <input type="text" name="chat" id="text" className='outline-none bg-transparent' value={input} onChange={(e)=>{setInput(e.target.value)}} />
                    <Image src={"/assets/images/sendChat.svg"} alt='send' width={30} height={30} className='cursor-pointer' onClick={handleSub}/>
                </div>
                </div>
            }
        <div className='fixed bottom-12 bg-red-600 right-8 rounded-full border-gray-200 cursor-pointer' onClick={()=>setChat(!chat)}>
            <Image src={"/assets/images/chatbot.gif"} alert="chatbot" width={100} height={100} />
        </div>
        </div>
    </div>
  )
}

export default ChatBot