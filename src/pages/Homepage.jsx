import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { indexPosts } from "../services/postServieces";
import Posts from "../components/posts/Posts";
import SearchField from "../components/inputField/SearchField";
const Homepage = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            let res = await indexPosts()
            console.log(res);
            if (res?.status === 200) {
                setPosts(res?.data?.payload?.data);
            }
        }
        fetch();
    }, []);
    return (
        <>
            <div className="flex w-full flex-row bg-[#f0f2f5]">
                {/* <div className="border border-black bg-background ">
                    <h1>email : {user.email}</h1>
                    <h1>name : {user.name}</h1>
                    <a href="/admin">Tới trang admin</a>
                    <br />
                    <a href="/login">Tới trang login</a>
                </div> */}
                {/* <div className="flex justify-center items-center w-full sticky top-0 left-0 h-[60px]">
                    <div className="w-[500px]">
                        <SearchField/>
                    </div>
                </div> */}
                <div className="relative w-full flex justify-center flex-1">
                    <div className="w-[500px] relative mr-[250px]">
                        {posts.map((ev)=>{
                            return (
                                <Posts post={ev} key={ev.id} />
                            )
                        })}
                    </div>
                </div>
                <div className="w-[300px] bg-background p-2 fixed top-0 right-0 h-screen overflow-y-auto flex flex-col">
                    <SearchField/>
                </div>
            </div>
        </>
    );
}

export default Homepage;