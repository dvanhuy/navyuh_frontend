import { useParams } from "react-router-dom";
import { showServer } from "../services/serverServices";
import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import { BASE_URL } from "../config";
import callApi from "../services/callApiServices";
import io from "socket.io-client";
import { localStorageHelper } from "../services/localStorageHelper";


const ServerPage = () => {
    window.io = io;
    const { serverID } = useParams()
    const [ server, setServer] = useState([]);
    const [ message, setMessage] = useState('');

    useEffect(() => {
        const fetch = async () => {
            let res = await showServer(serverID);
            setServer(res?.data)
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
        // window.Echo.channel('chat')
        //     .listen('.chatevent', (e) => {
        //         console.log(e);
        //     });
        // window.Echo.private('chat')
        //     .listen('.chatevent', (e) => {
        //         console.log(e);
        //     });

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
        <div className='flex items-stretch'>
            <div className="w-[16rem] h-screen sticky top-0 left-0 overflow-hidden bg-white border-r-2 border-r-background pl-2">
                <div className="w-full text-[25px] p-3">{server.name}</div>
                <h2>id là {serverID}</h2>
                <div>admin : {server.id_creator}</div>
            </div>
            <div className='flex-1 overflow-hidden bg-white'>
                <div>
                    <div>Danh sách người dùng</div>
                    <div> Lịch sử trò chuyện</div>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={handleSendMessage}>Gửi</button>
                </div>
            </div>
        </div>
    );
}
 
export default ServerPage;