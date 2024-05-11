import classNames from "classnames";

const CircleButton = ({children,state='default'}) => {
    const buttonStates = {
        default: 'w-12 h-12',
    };
    return ( 
        <div className={classNames(
            "rounded-full flex items-center justify-center gap-2 bg-slate-200 border-[1px] hover:bg-slate-100",
            buttonStates[state],
        )}
        >
            {children}
        </div>
     );
}
 
export default CircleButton;