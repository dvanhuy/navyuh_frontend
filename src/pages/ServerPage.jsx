import { useParams } from "react-router-dom";
import { showServer } from "../services/serverServices";
import { useEffect, useState } from "react";
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


const ServerPage = () => {
    window.io = io;
    const { serverID } = useParams()
    const [ server, setServer] = useState([]);
    const [ message, setMessage] = useState('');

    useEffect(() => {
        const fetch = async () => {
            let res = await showServer(serverID);
            setServer(res?.data)
            let messageres = await indexMessages(serverID);
            console.log(messageres);
        }
        fetch();
        const token = localStorageHelper.load('accessToken')
        console.log(window.location.hostname);
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
        window.Echo.join('chat')
        .here((users) => {
            console.log(users);
        })
        .joining((user) => {
            console.log(user);
        })
        .leaving((user) => {
            console.log(user);
        })
        .listen('.chatevent', (e) => {
            console.log(e);
        })
        .error((error) => {
            console.error(error);
        });
        // Echo.leaveChannel(`orders.${this.order.id}`);

    }, [serverID]);
    // const [messages, setMessages] = useState([]);
    const handleSendMessage = async () => {
        const url = BASE_URL + 'messages';
        let res = await callApi(url, 'post', {
            "message" : message,
            "server_id" : serverID,
        });
        console.log(res);
    };
    return (
        <div className='flex items-stretch h-screen'>
            <div className="w-[16rem] h-screen sticky top-0 left-0 overflow-hidden bg-white border-r-2 border-r-background pl-2">
                <div className="w-full text-[25px] p-3">{server.name}</div>
                <h2>id là {serverID}</h2>
                <div>admin : {server.id_creator}</div>
            </div>
            <div className='flex-1 overflow-y-auto bg-white'>
                <div>
                    <button onClick={handleSendMessage}>Gửi</button>
                    <div className="flex flex-col gap-3">
                        <MessageSend/><MessageReceive/>
                        <MessageSend/><MessageReceive/>
                        <MessageSend/><MessageReceive/>
                        <MessageSend/><MessageReceive/>
                        <MessageSend/><MessageReceive/>
                        <MessageSend/><MessageReceive/>
                        <MessageSend/><MessageReceive/>
                    </div>
                    <div className="w-full ">
                        <div className="">
                            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                    </div>
                </div>
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