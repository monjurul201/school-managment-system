import React, { useState } from 'react';
import { ImMinus, ImPlus } from 'react-icons/im';
const Question = ({ question, ans }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className= ' mt-2 '>
            <div onClick={() => setOpen(!open)} className={ ` hover:text-white ${open ? ' bg-[orange] cursor-pointer mt-2 rounded-md shadow-sm shadow-slate-800 h-10 flex justify-between pl-3 items-center' : ' cursor-pointer bg-slate-800 mt-2 rounded-md shadow-sm shadow-slate-800 h-10 flex justify-between pl-3 items-center'}`}>
                <div  >
                    <h2 className={` text-md md:text-2xl lg:text-2xl ${open ? "text-[#f1f3f5] text-md lg:text-xl" : 'text-md text-slate-500'}`} >{question}</h2>
                </div>

                <div className='flex  justify-center items-center mr-5' >
                    <div className={`${open ? ' rotate-[180deg] duration-[500ms]  font-bold  text-xl' : ' duration-[500ms] -rotate-[180deg]  font-bold  text-xl'}`} onClick={() => setOpen(!open)}>{!open ? <ImPlus /> : <ImMinus />}</div>
                </div>
            </div>
            <div className={` rounded-b-md ${!open ? ' duration-[500ms]' : 'duration-[500ms] pt-7'} bg-slate-800`}>
                {
                    open && <p className='p-2 -mt-5 text-slate-400 text-[19px]'> {ans}</p>
                }
            </div>

        </div>
    );
};

export default Question;