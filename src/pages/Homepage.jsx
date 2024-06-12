import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { indexPosts } from "../services/postServices";
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