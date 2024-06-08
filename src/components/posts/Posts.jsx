import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import parse from 'html-react-parser';

const Posts = ({post}) => {
    return ( 
        <div className="w-full flex flex-col my-6 bg-white rounded-2xl py-3 px-2">
            <div className="ml-4 relative flex items-center gap-3">
                <div>
                    <div className="size-10 rounded-full overflow-hidden content-center text-center border border-black">
                        <img className="object-cover  min-h-full min-w-full" alt="" src={post.author.avatar}/>
                    </div>
                </div>
                <div className="font-semibold font-sans">{post.author.name}</div>
                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <HiDotsHorizontal />
                </div>
            </div>
            <div className="pl-4 pr-2 py-2 text-left">
                {parse(post.content)}
            </div>
            <div>
                <img className="w-full max-h-[500px] mt-2" alt="" src={post.images}/>
            </div>
            <div className="grid grid-cols-2 mt-2 gap-[1px] bg-slate-400">
                <div className="font-semibold flex items-center gap-3 justify-center bg-white cursor-pointer select-none hover:bg-[#f0f2f5] py-1">
                    <FaRegComment />
                    <div className="">Bình luận</div>
                </div>
                <div className="font-semibold flex items-center gap-3 justify-center bg-white cursor-pointer select-none hover:bg-[#f0f2f5] py-1">
                    <IoMdShare />
                    <div>Chia sẻ</div>
                </div>
            </div>
        </div>
     ); 
}
 
export default Posts;