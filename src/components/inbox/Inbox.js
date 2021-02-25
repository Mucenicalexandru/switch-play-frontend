import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';

export default function Inbox() {
    const value = useContext(UserContext);
    const userId = value.userId
    const [Inbox, setInbox] = useState({});
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        axios
            .get(`/api/get-inbox/${userId}`, {
               
            })
            .then((response) => {
                console.log(response.data)
                setInbox(response.data)
                setMessages(response.data.receivedMessages)
      })},[])
    return (
        <div>
            <button onClick={()=>setMessages(Inbox.sentMessages)}> Received </button>
            <button onClick={()=>setMessages(Inbox.receivedMessages)}>Sent</button>
        
        <div>
            <table className="msg-table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Sender</th>
                        <th scope="col">Receiver</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                {messages.map((res)=>{
                return(
                <tr>
                    <td>{res.date}</td>
                    <td>{res.senderUserName}</td>
                    <td>{res.receiverUserName}</td>
                    <td>{res.message}</td>
                </tr>
                )})}
                </tbody>
            </table>
        </div>
        </div>
    )
}

