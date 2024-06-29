import ImageMessage from "./ImageMessage";

const ImageSend = (props) => {
    return ( 
        <div className='flex justify-end pr-7'>
            <div className='min-[2000px]:max-w-[40%] max-w-[50%] rounded-l-[10px] rounded-r-[10px] overflow-hidden'>
                <ImageMessage {...props}/>
            </div>
        </div>
     );
}
 
export default ImageSend;