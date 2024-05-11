import { useContext, useEffect, useState } from "react";
import callApi from "../services/callApiServices";
import { UserContext } from "../context/UserContext";
import { localStorageHelper } from "../services/localStorageHelper";

const AdminPage = () => {
    const { user,isLogin } = useContext(UserContext);
    useEffect(() => {
        async function getdata(){
            const returndata = await callApi('http://localhost:8000/api/admin/categorys','get')
            console.log(returndata);
            console.log(localStorageHelper.load('accessToken'));
        }
        getdata();
    }, []);
    return ( 
        <div>
            <h3>{JSON.stringify(user)}</h3>
            <h3>Đã login : {isLogin.toString()}</h3>
        </div>
     );
}
 
export default AdminPage;