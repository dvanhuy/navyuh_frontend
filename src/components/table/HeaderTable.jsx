const HeaderTable = ({children}) => {
    return (
        <thead className="w-full border-b-2 border-lightgrey text-left">
            <tr>
                {children.map((item,index)=>{
                    return (
                        <th key={index}>
                            <div className="mb-5">
                                {item}
                            </div>
                        </th>
                    )
                })}
            </tr>
        </thead>
     );
}
 
export default HeaderTable;