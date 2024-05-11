import classNames from 'classnames';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const NavItemWithChildrens = ({
    displayText,
    path,
    Icon,
    ActiveIcon,
    childrens
}) => {
    const [open, setOpen] = useState(false);
    return ( 
        <div>
            <div className={classNames(
                `pl-11 py-5 pr-4 flex gap-4 items-center relative select-none`,
                `hover:bg-primary-purple/5` ,
                `dark:text-slate-400`
                )}
                onClick={()=>setOpen(!open)}
                >
                <Icon className='w-6 h-6 text-icon' />
                <span className='text-sm font-medium'>{displayText}</span>
                <MdOutlineKeyboardArrowDown
                    className={classNames(
                    'w-6 h-6 text-dark-blue absolute top-1/2 -translate-y-1/2 right-4 transition-all duration-[400ms]',
                    open ? 'rotate-180' : 'rotate-0',
                    'dark:text-slate-400'
                    )}
                />
            </div>
            {/* wrapper */}
            <div className={classNames(
                'grid overflow-hidden transition-all duration-[400ms] origin-top',
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            )}
            >
                <div className='overflow-hidden'>
                    {childrens.map((navitem)=>{
                        return (
                            <NavLink to={navitem.path} key={navitem.path} className='block text-dark-blue'>
                                {({ isActive }) => (
                                <div className={classNames(
                                    `pl-14 py-5 pr-4 flex gap-4 items-center relative`,
                                    `hover:bg-primary-purple/5` ,
                                    isActive && `bg-primary-purple/10`,
                                    `dark:text-slate-400`
                                )}>
                                    {isActive ? 
                                    (<>
                                        <navitem.ActiveIcon className='w-5 h-5 text-primary-purple' />
                                        <div className='absolute w-1 h-full bg-primary-purple rounded-l-full top-0 right-0' />
                                    </>) 
                                    : 
                                    (
                                        <navitem.Icon className='w-5 h-5 text-icon' />
                                    )}
                                    <span
                                    className={classNames([
                                        'text-sm font-medium',
                                        isActive ? 'font-semibold' : ''
                                    ])}
                                    >{navitem.displayText}</span>
                                </div>)}
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default NavItemWithChildrens;