import { useOutletContext, useParams } from "react-router-dom";
import { getJoinServer, indexUserServers, joinServer } from "../services/serverServices";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const JoinServer = () => {
    const { serverID } = useParams()
    const [server, setServer] = useState();
    const { updateServers } = useOutletContext();
    useEffect(() => {
        try {
            const fetch = async () => {
                let res = await getJoinServer(serverID)
                if (res?.status === 200) {
                    setServer(res?.data?.payload)
                }
            }
            fetch();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleClickJoin = async(ev) => {
        let res = await joinServer(serverID);
        updateServers();
    }
    return ( 
        <div>
            {serverID}
            <div className="flex flex-col items-center gap-4">
                <div>{server?.name}</div>
                <div>
                    <img className="w-6 h-6 rounded-full" src={server?.images} alt="" />
                </div>
                <div>Hiện tại máy chủ đăng mở tham gia !</div>
                <div>Bạn có muốn tham gia hay không ?</div>
                <div className="flex gap-8 text-[20px] font-bold text-white">
                    <div className="rounded-full bg-red-500 p-2 cursor-pointer">
                        <AiOutlineClose />
                    </div>
                    <div className="rounded-full bg-green-500 p-2 cursor-pointer" onClick={()=>handleClickJoin(123)}>
                        <AiOutlineCheck />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default JoinServer;