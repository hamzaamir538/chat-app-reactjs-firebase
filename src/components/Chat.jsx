import React from "react";
import dp from "./../img/AvatarMaker.png";
import { TbPhoneCall, TbVideoPlus, TbDotsVertical } from "react-icons/tb";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chatBox">

      <div className="chatNav">
        <div className="senderInfo">
          <div className="senderImg">
            <img src={dp} width='100%' alt="" />
          </div>
          <div className="senderName">Hamza Aamir</div>
        </div>
        <div className="chatFeatureIcons">
          <div>
            <TbPhoneCall />
          </div>
          <div>
            <TbVideoPlus />
          </div>
          <div>
            <TbDotsVertical />
          </div>
        </div>
      </div>

      <Messages />

      <Input />

    </div>
  );
};

export default Chat;
