const ImageMessage = ({images}) => {
    const handleClickImage = (image) => {
        alert(image);
    }
    const numberImages = images.length
    let components
    if (numberImages===1) {     
        components = 
        <div className='max-w-[350px] max-h-[300px] flex items-center'>
            <img className='min-h-full min-w-full cursor-pointer' 
                src={images[0].image_url} 
                alt="" 
            />
        </div>
    } else if (numberImages<=4) {
        let imgs = images.map((item,index)=>{
            return (
                <div className='overflow-hidden w-full max-h-[150px] flex items-center justify-center'>
                    <img className='cursor-pointer min-h-full min-w-full object-cover' 
                        key={index} 
                        src={item.image_url} 
                        alt=""  
                        onClick={()=>handleClickImage(images[0].image_url)} />
                </div>
            )
        })
        components = 
        <div className={`max-h-full max-w-full grid gap-[2px] ${numberImages===3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {imgs}
        </div>
    }
    else if (numberImages<=9) {
        let imgs = images.map((item,index)=>{
            return (
                <div className='overflow-hidden w-full max-h-[150px] flex items-center justify-center'>
                    <img className='min-w-full min-h-full object-cover cursor-pointer' key={index} src={item.image_url} alt=""  onClick={()=>handleClickImage(images[0].image_url)} />
                </div>
            )
        })
        components = 
        <div className={`max-h-full max-w-full grid gap-[2px] grid-cols-3 overflow-hidden`}>
            {imgs}
        </div>
    } else {
        let imgs = images.map((item,index)=>{
            return (
                <div className='overflow-hidden w-full max-h-[150px] flex items-center justify-center'>
                    <img className='min-w-full min-h-full object-cover cursor-pointer' key={index} src={item.image_url} alt=""  onClick={()=>handleClickImage(images[0].image_url)} />
                </div>
            )
        })
        components = 
        <div className={`max-h-full max-w-full grid gap-[2px] grid-cols-4 overflow-hidden`}>
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