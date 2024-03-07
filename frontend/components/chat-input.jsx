"use client"
import React, { useEffect } from 'react'
import { Image ,Send } from 'lucide-react'
import {Input} from "./ui/input"
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import axios from 'axios'

const ChatInput = () => {

  // window.Echo = new Echo({
  //   broadcaster: "pusher",
  //   key: "b0e3878f21b292913c9f",
  //   cluster: "ap2",
  //   encrypted: true,
  // })

  // useEffect(()=>{
  //   window.Echo.channel('chat.L1').listen("chat.L1",(data)=>{
  //     console.log(data)
  //   })
  // },[])


  //   const sendMess = async (e)=>{
  //     e.preventDefault()
  //     console.log("res")
  //     const res = await axios.post('http://192.168.0.100:8000/api/send/message',{content: "dggfgfdgfdbhtege", sender:1, channel: "L1"})
      
  //   }

  return (
    <div className='send-mess'>
        <div className="file-trigger">
            <Image className='text-emerald-50'/>
        </div>
        <Input />
        <d className="send bg-emerald-500 p-3 rounded-sm cursor-pointer">
            <Send className='text-emerald-50'/>
        </d>
    </div>
  )
}

export default ChatInput