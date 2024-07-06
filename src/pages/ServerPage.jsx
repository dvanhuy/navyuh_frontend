import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Echo from "laravel-echo";
import io from "socket.io-client";
import { localStorageHelper } from "../services/localStorageHelper";
import MessageSend from "../components/messageBox/MessageSend";
import MessageReceive from "../components/messageBox/MessageReceive";
import UserOnline from "../components/avatar/UserOnline";
import UserOffline from "../components/avatar/UserOffline";
import { sendMessages } from "../services/messageServices";
import { UserContext } from "../context/UserContext";
import MessageField from "../components/inputField/MessageField";
import ImageReceive from "../components/messageBox/ImageReceive";
import ImageSend from "../components/messageBox/ImageSend";
import { messagedata } from "../zfakedata/messagedata";
import DetailImageBox from "../components/box/DetailImageBox";
import ServerInfo from "../components/childframe/ServerInfo";



const ServerPage = () => {
    window.io = io;
    const { user } = useContext(UserContext);
    const { serverID } = useParams()

    const [ server, setServer] = useState([]);
    const [ messages, setMessages] = useState([]);
    const [ status, setStatus] = useState('Đã gửi');
    const [ selectedImage, setSelectedImage] = useState('');
    // Promise.allsettled()

    useEffect(() => {
        const fetch = async () => {
            // let res = await showServer(serverID);
            // setServer(res?.data)
            // let messageres = await indexMessages(serverID);
            // // console.log(messageres);
            // if (messageres?.status === 200){
            //     setMessages(messageres?.data?.payload?.data)
            // }
            let messageres = messagedata;
            setMessages(messageres?.payload?.data)
        }
        fetch();
        handleConnectSocket()
    }, [serverID]);
    const handleSendMessage = async (message)=>{
        // if (status === 'Gửi lỗi') {
        //     setMessages((ev)=>ev.filter((_, i) => i > 0))
        // }
        setStatus('Đang gửi')
        setMessages((ev)=>[
            {
                'content': message,
                'type' : 'text',
                'sender_id' : user.id
            },
            ...ev
        ]);
        const send = await sendMessages({
            'server_id' : serverID,
            'content' : message,
        });
        setStatus('Đã gửi')
        // if (send?.status===200){
        //     setStatus('Đã gửi')
            
        // }
        // else{
        //     setStatus('Gửi lỗi')
        // }

    }
    const handleConnectSocket = async () =>{
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
    }
    return (
        <div className='flex items-stretch h-screen'>
            {selectedImage && <DetailImageBox img={selectedImage} handleClose={()=>setSelectedImage(false)}/>}
            <div className="w-[16rem] h-screen sticky top-0 left-0 overflow-hidden 
                         bg-white border-r-2 border-r-background pl-2 max-[1000px]:hidden">
                <ServerInfo/>
            </div>
            <div className='flex flex-col flex-1 bg-white'>
                <div className="flex flex-col-reverse gap-3 overflow-y-auto pb-3 flex-1">
                    {   
                        messages[0]?.sender_id === user.id && 
                        <div className={
                            `w-full flex justify-end pr-7 -mt-3 ${
                                status==='Gửi lỗi' ? 'text-red-500' : ''
                            }`
                        }>
                            {status}
                        </div>
                    }
                    {
                        messages.map((message,index)=>{
                        if (message.type === 'images') {
                            return user.id === message.sender_id ? (
                                <ImageSend key={index} handleClickImage={(img)=>setSelectedImage(img)} images={message?.message_images} />
                            ) : (
                                <ImageReceive sender={{'name':'DVH'}} key={index} handleClickImage={(img)=>setSelectedImage(img)} images={message?.message_images} />
                            );
                        } else {
                            return user.id === message.sender_id ? (
                                <MessageSend key={index}>{message.content}</MessageSend>
                            ) : (
                                <MessageReceive sender={{'name':'DVH'}} key={index}>{message.content}</MessageReceive>
                            );
                        }
                    })}
                </div>
                <MessageField sendMessage={handleSendMessage}/>
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