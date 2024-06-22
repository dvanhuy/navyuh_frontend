import ImageMessage from "./ImageMessage";

const ImageReceive = ({images}) => {
    return ( 
        <div className='flex justify-start pl-7'>
            <div className='min-[2000px]:max-w-[40%] max-w-[50%] rounded-l-[10px] rounded-r-[10px] overflow-hidden'>
                <ImageMessage images={images}/>
            </div>
        </div>
     );
}
 
export default ImageReceive;