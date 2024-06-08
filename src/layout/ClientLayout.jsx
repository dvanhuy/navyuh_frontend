import { Outlet, useLocation } from "react-router-dom";
import ServerButton from "../components/button/ServerButton";
import Logo from '../assets/images/logonavyuh.png';
import { useEffect, useState, useCallback } from "react";
import { indexUserServers } from "../services/serverServices";
const ClientLayout = () => {
    const [servers, setServers] = useState([]);
    useEffect(() => {
        updateServers();
    },[]);
    const updateServers = async()=>{
        try {
            let res = await indexUserServers()
            if (res?.status === 200) {
                setServers(res?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className='flex items-stretch bg-white'>
            <div className='h-screen bg-background sticky top-0 left-0 overflow-y-auto flex flex-col gap-2 select-none pr-[10px] pt-[10px]'>
                <ServerButton linkserver="" key='home'>
                    <img className='w-2/3' src={Logo} alt='' />
                </ServerButton>
                <div className="block bg-slate-300 h-1 w-[50px] ml-5 shrink-0 rounded-[10px]"></div>
                {servers.map((item) => {
                    return (
                        <ServerButton linkserver={`/servers/${item.server_id}`} key={item.server_id}>
                            <img className='w-2/3' src={Logo} alt='' />
                        </ServerButton>
                    )
                })}
            </div>
            <div className='flex-1 overflow-hidden'>
                <Outlet context={{updateServers}}/>
            </div>
      </div>
     );
}
 
export default ClientLayout;