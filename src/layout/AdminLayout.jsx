import { Outlet } from "react-router-dom";
import SideNav from "../components/adminNav/SideNav";

const AdminLayout = () => {
    return ( 
        <div className='flex items-stretch bg-background'>
            <SideNav />
            <div className='px-12 py-24 flex-1 overflow-hidden'>
                <Outlet />
            </div>
        </div>
     );
}
 
export default AdminLayout;