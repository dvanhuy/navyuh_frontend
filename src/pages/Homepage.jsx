import { useContext, useEffect, useState } from "react";
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

export default Homepage;