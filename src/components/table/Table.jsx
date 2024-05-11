const Table = ({children}) => {
    return (
        <div className="bg-white p-7 mt-6 pb-16 rounded">
            <table className="w-full">
                {children}
            </table>
        </div>
        
     );
}
 
export default Table;