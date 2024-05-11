import { useContext, useEffect, useState } from "react";
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

export default Homepage;