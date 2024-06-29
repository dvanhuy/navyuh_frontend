const DetailImageBox = ({img,handleClose}) => {
    const openImageNewTab = ()=>{
        window.open(img, '_blank').focus();
    }
    return ( 
        <div className='fixed h-screen w-screen inset-0 z-10 flex items-center justify-center'>
            <div className='opacity-100 z-10'>
                <div className='max-h-[500px] max-w-[500px]'>
                    <img className='max-h-[500px] max-w-[500px]' src={img} alt="" />
                </div>
                <div className='text-[#eeeeee] mt-3 cursor-pointer' onClick={openImageNewTab}>Mở trong tab mới</div>
            </div>
            <div className='absolute inset-0 bg-[#000000] w-full h-full opacity-40' onClick={handleClose} ></div>
        </div>
     );
}
 
export default DetailImageBox;