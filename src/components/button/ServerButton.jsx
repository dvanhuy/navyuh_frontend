import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const ServerButton = ({ children,linkserver }) => {
    const [hover, setHover] = useState(false);
    const handleHover = () => {
        setHover(true);
    }
    const handleHoverOut = () => {
        setHover(false);
    }
    return (
        <NavLink to={linkserver} className='block text-dark-blue'>
            {({isActive})=>(
                <div className="flex items-center gap-[10px]">
                    <div className={classNames(
                        "w-[6px] bg-primary-purple opacity-80 rounded-r-full transition-all duration-300",
                        { '!h-10': isActive },
                        hover ? 'h-6' : 'h-0',2
                    )}>
                    </div>
                    <div className={classNames(
                        'flex items-center justify-center gap-2 w-[60px] h-[60px] border-[1px] bg-slate-300',
                        'rounded-[50%] hover:rounded-[18px] transition-all duration-300',
                        { '!rounded-[18px]': isActive },
                    )}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverOut}
                    >
                    {children}
                </div>
            </div>
            )}
        </NavLink>
    );
}

export default ServerButton;