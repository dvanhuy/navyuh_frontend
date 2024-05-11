import BreadCrumbs from "../components/breadcrumb/BreadCrumbs";
import SearchField from "../components/inputField/SearchField";
import { Link } from 'react-router-dom';
import { RiAddFill } from 'react-icons/ri';
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useState } from "react";
import Table from "../components/table/Table";
import HeaderTable from "../components/table/HeaderTable";
import BodyTable from "../components/table/BodyTable";
const CategoryIndex = () => {
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
    return (
        <div>
            <BreadCrumbs>
                <span>QUẢN LÝ DANH MỤC</span>
                <span>DANH MỤC LỚN</span>
            </BreadCrumbs>
            <div className='flex items-center justify-between mt-2'>
                <h1 className='text-3xl text-dark-blue font-semibold'>
                    Quản lý danh mục lớn
                </h1>
                <div className='flex gap-6'>
                    <SearchField placeholder={'Tìm kiếm danh mục'} value={search} onChange={handleChange} />
                    <Link to='/category/add' className='flex items-center gap-2 text-white bg-primary-purple px-7 py-3 rounded-lg font-semibold text-sm justify-center whitespace-nowrap'>
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
                    <p>Gmail</p>
                    <p>Tên</p>
                    <p>Hình đại diện</p>
                    <p>Ngày sinh</p>
                    <p>Số server</p>
                    <p>Thao tác</p>
                </HeaderTable>
                <BodyTable>
                    <tr>
                        <td>huydinhvan13@gmail.com</td>
                        <td>Đinh Văn Huy</td>
                        <td>ảnh</td>
                        <td>10/9/2002</td>
                        <td>4</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>huydinhvan13@gmail.com</td>
                        <td>Đinh Văn Huy</td>
                        <td>ảnh</td>
                        <td>10/9/2002</td>
                        <td>4</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>huydinhvan13@gmail.com</td>
                        <td>Đinh Văn Huy</td>
                        <td>ảnh</td>
                        <td>10/9/2002</td>
                        <td>4</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>huydinhvan13@gmail.com</td>
                        <td>Đinh Văn Huy</td>
                        <td>ảnh</td>
                        <td>10/9/2002</td>
                        <td>4</td>
                        <td>123</td>
                    </tr>
                </BodyTable>
            </Table>
        </div>
    );
}

export default CategoryIndex;