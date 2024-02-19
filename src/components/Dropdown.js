import { useState, useEffect, useRef } from "react";
import { GoTriangleDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen]  = useState(false);
    const divEl = useRef();

    useEffect(()=>{
        const handler = (event)=>{
            if(!divEl.current) return;
            
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        const cleanUp = () =>{
            document.removeEventListener('click', handler);
        }
        return cleanUp;
    }, []);

    const handleClick = () =>{
        setIsOpen((currentIsOpen)=>!currentIsOpen);
    }
    const handleOptionClick = (option) =>{
        setIsOpen((currentIsOpen)=>!currentIsOpen);
        onChange(option);
    }

    const renderedOptions = options.map((option)=>{
        return(
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=>handleOptionClick(option)}>
                {option.label}
            </div>
        );
    });

    const icon = <span className="text-xl"><GoTriangleDown/></span>
    return(
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select'}
                {icon}
            </Panel>
            {
            isOpen && (
            <Panel className="absolute top-full">
                {renderedOptions}
            </Panel>
            )}
        </div>
    );
}

export default Dropdown;