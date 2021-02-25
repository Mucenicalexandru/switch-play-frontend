import React from 'react'
import './Inbox.css';

export default function MessageSection({SetMessageModal,}) {
    return (
        <div className="message-container" >
            <div className="modal-main">
                <textarea  size="50" rows="4"></textarea>
                <button className="btn btn-special" onClick={()=>{SetMessageModal(false)}}>Send Message</button>
            </div>
        </div>
    )
}
