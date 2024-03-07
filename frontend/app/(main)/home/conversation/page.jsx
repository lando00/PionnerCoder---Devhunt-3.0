import React from 'react'
import ChatInput from "../../../../components/chat-input"
import { UserButton } from '@clerk/nextjs'
const Carte = () => {

  return (
    <div className='w-full conversation relative flex justify-center items-center p-4'>
        <div className="body-conversation">
          <div className="conversation-point">
            <div className="message">
              <UserButton
                appearance={{
                elements: {
                  avatarBox: "h-[48px] w-[48px]"
                }
              }}
              />
              <div className="contentMess">
                <h5 className='text-zinc-200 text-xl'>Jean Herlin</h5>
                <p className='text-zinc-400 text-sm'>My message is here.</p>
              </div>
            </div>
          </div>
        </div>
        <ChatInput/>
    </div>
  )
}

export default Carte