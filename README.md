//homepage cu
<!-- import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import SearchField from "../components/inputField/SearchField";
import { indexServers, joinServer } from "../services/serverServices";
import ServerPopUp from "../components/box/ServerPopUp";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
    const { user } = useContext(UserContext);
    const [servers, setServers] = useState([]);
    const navigate = useNavigate();

    const [serverPopup, setServerPopup] = useState({
        visible: false,
        id: 0,
        name: "Server name",
    });

    useEffect(() => {
        const fetch = async () => {
            let res = await indexServers()
            if (res?.status === 200) {
                setServers(res.data);
            }
            console.log(res);
        }
        fetch();
    }, []);

    const handleJoinServer = async (id) => {
        let res = await joinServer(id);
        setServerPopup((prevState) => ({
                        ...prevState,
                        visible: false,
                    }))
        console.log(res);            
        // if (res.status === 303) {
        // navigate('/servers/'+id)
        // }            
    }

    return (
        <>
            {serverPopup.visible && <ServerPopUp
                name={serverPopup.name}
                handleCancel={
                    () => setServerPopup((prevState) => ({
                        ...prevState,
                        visible: false,
                    }))
                }
                handleAllow={() => handleJoinServer(serverPopup.id)}
            />}
            <div className="flex w-full h-screen">
                <div className="border border-black bg-background ">
                    <h1>email : {user.email}</h1>
                    <h1>name : {user.name}</h1>
                    <a href="/admin">Tới trang admin</a>
                    <br />
                    <a href="/login">Tới trang login</a>
                </div>
                <div className="w-full">
                    <div className="mt-2 mx-4">
                        <SearchField></SearchField>
                        {servers.map((item) => {
                            return (
                                <div
                                    className="cursor-pointer"
                                    key={item.id}
                                    onClick={
                                        () => setServerPopup({
                                            id: item.id,
                                            name: item.name,
                                            visible: true,
                                        })
                                    }>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage; -->















<!-- import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { indexPosts } from "../services/postServieces";
import Posts from "../components/posts/Posts";
import SearchField from "../components/inputField/SearchField";
const Homepage = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            let res = await indexPosts()
            // if (res?.status === 200) {
            //     setServers(res.data);
            // }
            console.log(res);
        }
        fetch();
    }, []);

    return (
        <>
            <div className="flex w-full flex-col">
                {/* <div className="border border-black bg-background ">
                    <h1>email : {user.email}</h1>
                    <h1>name : {user.name}</h1>
                    <a href="/admin">Tới trang admin</a>
                    <br />
                    <a href="/login">Tới trang login</a>
                </div> */}
                <divc className="flex justify-center items-center w-full sticky top-0 left-0 h-[70px]">
                    <div className="w-[500px]">
                        <SearchField/>
                    </div>
                </divc>
                <div className="w-full flex justify-center flex-1">
                    <div className="bg-red-500 min-w-[600px]  max-w-[1000px]">
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage; -->