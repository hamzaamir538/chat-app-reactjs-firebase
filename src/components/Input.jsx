import React from 'react';
import { GrAttachment } from 'react-icons/gr';
import { BiImageAdd } from 'react-icons/bi';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { RiSendPlaneLine } from 'react-icons/ri';

const Input = () => {
  return (
    <div className='inputBox'>
      <form action="">
        <div className='msgInput'>
          <input type="text" placeholder='Type a Message'/>
        </div>
        <div className='fileInput'>
          <div><GrAttachment /></div>
          <div><BiImageAdd /></div>
          <div><MdOutlineKeyboardVoice /></div>
        </div>
        <div className='sendBtn'>
          <button type="submit">
            <span>Send</span>
            <RiSendPlaneLine />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input