import BreadCrumbs from "../components/breadcrumb/BreadCrumbs";
import SearchField from "../components/inputField/SearchField";
import { Link } from 'react-router-dom';
import { RiAddFill } from 'react-icons/ri';
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useState } from "react";
import Table from "../components/table/Table";
import HeaderTable from "../components/table/HeaderTable";
import BodyTable from "../components/table/BodyTable";
import RowTable from "../components/table/RowTable";
import { indexServers } from "../services/serverServices";
const Server = () => {
    const [search, setSearch] = useState('');
    const handleChange = (ev) => {
        setSearch(ev.target.value);
        debouncedHandleSearch(ev.target.value);
    }

    const callApi = (currentSearch) => {
        console.log(currentSearch);
    }
    const debouncedHandleSearch = useCallback(
        debounce((currentSearch) => callApi(currentSearch), 1000),
        []
    );

    const [servers, setServers] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const response = await indexServers();
                setServers(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, []);
    
    return (
        <div>
            <BreadCrumbs>
                <span>QUẢN LÝ MÁY CHỦ</span>
            </BreadCrumbs>
            <div className='flex items-center justify-between mt-2'>
                <h1 className='text-3xl text-dark-blue font-semibold'>
                    Quản lý máy chủ
                </h1>
                <div className='flex gap-6'>
                    <SearchField placeholder={'Tìm kiếm danh mục'} value={search} onChange={handleChange} />
                    <Link to='/admin/servers/add' className='flex items-center gap-2 text-white bg-primary-purple px-7 py-3 rounded-lg font-semibold text-sm justify-center whitespace-nowrap'>
                        <RiAddFill className='' size={24} />
                        Thêm mới
                    </Link>
                </div>
            </div>
            <Table>
                {/* <colgroup>
                    <col span="1" className="w-1/2"/>
                    <col span="1" className="w-[1/12%]"/>
                    <col span="1" className="w-[1/12%]"/>
                    <col span="1" className="w-[1/12%]"/>
                    <col span="1" className="w-[1/12%]"/>
                    <col span="1" className="w-[1/12%]"/>
                </colgroup> */}
                <HeaderTable>
                    <p>Tên máy chủ</p>
                    <p>Mô tả</p>
                    <p>ID người tạo</p>
                    <p>Thời gian tạo</p>
                    <p>Thao tác</p>
                </HeaderTable>
                <BodyTable>
                    {
                        servers.map((item,index)=>{
                            var date = new Date(item.created_at);
                            return (
                                <RowTable key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.idcreator}</p>
                                    <p>{date.toLocaleString()}</p>
                                    <div className="flex justify-between px-10">
                                        <p>1</p>
                                        <p>2</p>
                                        <p>3</p>
                                    </div>
                                </RowTable>
                            )
                        })
                    }
                </BodyTable>
            </Table>
        </div>
    );
}

export default Server;