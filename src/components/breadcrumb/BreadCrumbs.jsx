import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const BreadCrumbs = ({ children }) => {
    if (Array.isArray(children)) {
        return (
            <div className='flex items-center text-dark-blue text-xs'>
                {children.map((item, index) => (
                    <React.Fragment key={index}>
                        {item}
                        {index < children.length - 1 && (
                            <MdOutlineKeyboardArrowRight className='w-4 h-4 mx-1' />
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    } else {
        return (
            <div className='flex items-center text-dark-blue text-xs'>
                {children}
            </div>
        );
    }
    
}

export default BreadCrumbs;
