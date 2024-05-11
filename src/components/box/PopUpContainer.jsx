const PopUpContainer = ({children}) => {
    return ( 
        <div>
            <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black opacity-20 z-10 select-none">
            </div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-md rounded-lg z-20">{children}</div>
        </div>
     );
}
 
export default PopUpContainer;