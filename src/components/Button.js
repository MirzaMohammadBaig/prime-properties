import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    const finalClassName = twMerge( classNames(rest.className,'flex items-center px-3 py-1.5 border-2',{
        'bg-blue-500 border-blue-600 text-white':primary,
        'bg-black border-black text-white': secondary,
        'bg-green-500 border-green-600 text-white': success,
        'bg-yellow-500 border-yellow-600 text-white':warning,
        'bg-red-500 border-red-600 text-white':danger,
        'rounded-full':rounded,
        'bg-white':outline,
        'text-blue-600':outline&&primary,
        'text-gray-900':outline&&secondary,
        'text-green-600':outline&&success,
        'text-yellow-600':outline&&warning,
        'text-red-600':outline&&danger,
    }) ); 

    return(
        <button {...rest} className={finalClassName}>{children}</button>
    );
}

Button.propTypes = {
    checkProps:({primary, secondary, success, warning, danger})=>{
        const count = Number(!!primary)
            +Number(!!secondary)
            +Number(!!success)
            +Number(!!warning)
            +Number(!!danger)

    if(count>1) return new Error("Only one of primary, secondary, success, warning or danger can be true");
    }
};

export default Button;