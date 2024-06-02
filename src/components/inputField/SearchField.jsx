import { RiSearchLine } from 'react-icons/ri';
const SearchField = ({value,onChange,name,placeholder}) => {
    return (
        <label className='relative'>
            <RiSearchLine
                size={24}
                className='text-icon dark:text-slate-600 absolute top-1/2 -translate-y-1/2 left-3'
            />
            <input
                className='w-full text-base font-medium py-[10px] pl-[40px] rounded shadow-primary outline outline-lightgrey outline-2 focus:outline-primary-purple box-border'
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
            />
        </label>
    );
}

export default SearchField;