const ButtonForm = ({content,disable}) => {
    return ( 
        <button
            type='submit'
            disabled={disable}
            className='whitespace-nowrap mt-[10px] text-[14px] font-semibold py-[20px] bg-black rounded text-white'
        >
        {content}
        </button>
    );
}
 
export default ButtonForm;