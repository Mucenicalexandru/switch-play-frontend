import React, { useState, useContext } from 'react';
import '../../Inbox.css';
import { UserContext } from '../UserContext';
import axios from 'axios';

export default function MessageSection({ SetMessageModal, userToSendMessage }) {
  const user = useContext(UserContext);
  const [message, setMessage] = useState({
    senderUserName: user.firstName,
    receiverUserName: userToSendMessage.firstName,
    senderId: user.userId,
    receiverId: userToSendMessage.id,
    message: '',
  });

  function sendMessage() {
    SetMessageModal(false);
    axios
      .post(`/api/send-message/`, message)
      .then(() => alert('Message sent'))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="message-container">
      <div className="modal-main">
        <h4>Send Message to :{userToSendMessage.firstName}</h4>
        <div className="message-btn-container">
          <textarea
            onChange={(e) => {
              const s = { ...message };
              s.message = e.target.value;
              setMessage(s);
            }}
            size="50"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="btn btn-special"
            onClick={(e) => {
              sendMessage(e);
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
