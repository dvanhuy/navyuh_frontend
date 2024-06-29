import ImageError from '../../assets/images/image_error.jpg';

const ImageMessage = ({images,handleClickImage}) => {
    let numberImages
    try {
        numberImages = images.length
    } catch (error) {
        numberImages=0
    }
    let components
    const renderImages = () => {
        return images.map((item,index)=>{   
            return (
                <div key={index} className='overflow-hidden w-full max-h-[150px] flex items-center justify-center'>
                    <img className='cursor-pointer min-h-full min-w-full object-cover' 
                        src={item.image_url} 
                        alt=""  
                        onClick={(ev)=>handleClickImage(item.image_url)} />
                </div>
            )
        })
    }
    if (numberImages===0) {
        components = 
        <div className='max-w-[350px] max-h-[250px] flex items-center'>
            <img className='min-h-full min-w-full cursor-pointer' 
                src={ImageError} 
                alt="" 
            />
        </div>
    } 
    else if (numberImages===1) {     
        components = 
        <div className='max-w-[350px] max-h-[250px] flex items-center'>
            <img className='min-h-full min-w-full cursor-pointer' 
                src={images[0].image_url} 
                alt="" 
            />
        </div>
    } else if (numberImages<=4) {
        let imgs = renderImages()
        components = 
        <div className={`max-h-full max-w-full grid gap-[2px] ${numberImages===3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {imgs}
        </div>
    }
    else if (numberImages<=9) {
        let imgs = renderImages()
        components = 
        <div className={`max-h-full max-w-full grid gap-[2px] grid-cols-3 overflow-hidden`}>
            {imgs}
        </div>
    } else {
        let imgs = renderImages()
        components = 
        <div key={Math.random()} className={`max-h-full max-w-full grid gap-[2px] grid-cols-4 overflow-hidden`}>
            {imgs}
        </div>
    }
    return ( 
        <>
            {components}
        </>
     );
}
 
export default ImageMessage;