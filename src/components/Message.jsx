import React from "react";
import dp from './../img/AvatarMaker.png';
import { BsTrash } from 'react-icons/bs';

const Message = () => {
  return (
    <div className="singleMsg owner">

      <div className="msgInfo">
        <div className="msgImg">
          <img src={dp} width='100%' alt="" />
        </div>
        <div className="msgTime">Just Now</div>
      </div>

      <div className="msgContent">Lorem Ipsum Dolor Sit Amet....!</div>

      <div className="msgDelete">
        <button>
          <BsTrash />
        </button>
      </div>

    </div>
  );
};

export default Message;
