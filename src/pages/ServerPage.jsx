import { useParams } from "react-router-dom";
import { showServer } from "../services/serverServices";
import { useContext, useEffect, useState } from "react";
import Echo from "laravel-echo";
import { BASE_URL } from "../config";
import callApi from "../services/callApiServices";
import io from "socket.io-client";
import { localStorageHelper } from "../services/localStorageHelper";
import MessageSend from "../components/messageBox/MessageSend";
import MessageReceive from "../components/messageBox/MessageReceive";
import UserOnline from "../components/avatar/UserOnline";
import UserOffline from "../components/avatar/UserOffline";
import { indexMessages } from "../services/messageServices";
import { UserContext } from "../context/UserContext";
import MessageField from "../components/inputField/MessageField";



const ServerPage = () => {
    window.io = io;
    const { user } = useContext(UserContext);
    const { serverID } = useParams()
    const [ server, setServer] = useState([]);
    const [ message, setMessage] = useState('');
    const [ messages, setMessages] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            let res = await showServer(serverID);
            setServer(res?.data)
            let messageres = await indexMessages(serverID);
            // console.log(messageres);
            if (messageres?.status == 200){
                setMessages(messageres?.data?.payload?.data)
            }
        }
        fetch();
        const token = localStorageHelper.load('accessToken')
        if (!window.Echo){
            window.Echo = new Echo({
                broadcaster: 'socket.io',
                host:'localhost:6001',
                // host: window.location.hostname + ':6001',
                auth: {     
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                },
            });
        }
        window.Echo.connector.socket.on('connect_error', (error) => {
            console.error('Error Message:', error.message);
            window.Echo.disconnect();
          });
        // window.Echo.join('chat')
        // .here((users) => {
        //     console.log(users);
        // })
        // .joining((user) => {
        //     console.log(user);
        // })
        // .leaving((user) => {
        //     console.log(user);
        // })
        // .listen('.chatevent', (e) => {
        //     console.log(e);
        // })
        // .error((error) => {
        //     console.error(error);
        // });
        // Echo.leaveChannel(`orders.${this.order.id}`);

    }, [serverID]);
    // const [messages, setMessages] = useState([]);
    const handleSendMessage = async () => {
        const url = BASE_URL + 'messages';
        let res = await callApi(url, 'post', {
            "message" : message,
            "server_id" : serverID,
        });
    };
    return (
        <div className='flex items-stretch h-screen'>
            <div className="w-[16rem] h-screen sticky top-0 left-0 overflow-hidden bg-white border-r-2 border-r-background pl-2">
                <div className="w-full text-[25px] p-3">{server?.name}</div>
                <h2>id là {serverID}</h2>
                <div>admin : {server?.id_creator}</div>
            </div>
            <div className='flex flex-col flex-1 bg-white'>
                    {/* <button onClick={handleSendMessage}>Gửi</button> */}
                <div className="flex flex-col-reverse gap-3 overflow-y-auto pb-3 flex-1">
                    {messages.map((message)=>{
                        if (user.id === message.sender_id) {
                            return (
                                <MessageSend key={message.id}>{message.content}</MessageSend>
                            )
                        }
                        return <MessageReceive key={message.id}>{message.content}</MessageReceive>
                    })}
                </div>
                <MessageField/>
            </div>
            <div className="w-[16rem] h-screen sticky top-0 right-0 overflow-auto bg-white border-r-2 border-r-background pl-2">
                <div>
                    <div className="mt-4 font-semibold">Trực tuyến - 1</div>
                    <div className="mt-3">
                        <UserOnline name={"Đinh Văn Huy Đinh Văn Huy Đinh Văn Huy"}/>
                        <UserOnline name={"Đinh Văn Huy"}/>
                        <UserOnline name={"Đinh Văn Huy"}/>
                    </div>
                </div>
                <div>
                    <div className="mt-4 font-semibold">Ngoại tuyến - 16</div>
                    <div className="mt-3">
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                        <UserOffline name={"Đinh Văn Huy"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ServerPage;