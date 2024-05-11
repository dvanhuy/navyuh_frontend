const RowTable = ({children}) => {
    return ( 
        <tr className="text-left [&>td:last-child>div]:pr-0">
            {children.map((item,index)=>{
                return (
                    <td key={index} className="max-w-[300px]">
                        <div className="pr-5 pt-2 min-h-10 flex flex-col justify-center text-justify">
                            {item}
                        </div>
                    </td>
                )
            })}
        </tr>
     );
}
 
export default RowTable;