import React, { useEffect, useState } from 'react';
import song from '../components/asset/Aamar Sonar Bangla.mp3'

const School = () => {
    const [hidden,setHidden]=useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY >50? setHidden(true) : setHidden(false);
        });
    });
    return (
        <div id='home'className={`${hidden ?'hidden ':'static'} w-full school__header  md:h-auto p-3 flex justify-center md:items-center bg-[#002147]`}>
            <div className='text-white tracking-widest mt-0 pt-0 md:mt-2'>
                <h1 className='font-semibold text-4xl  text-center md:font-semibold md:text-[40px]' >সোনারায়  সংগলশী উচ্চ বিদ্যালয়,<br /><span className='flex justify-center pt-2 md:pt-5'>নীলফামারী</span> </h1>
                <h1 className='flex justify-center font-medium text-xl pt-3'>স্থাপিত: ১৯৬৬ </h1>
                <h2 className='flex justify-center  font-semibold pb-1 text-[11px] sm:text-[15px] lg:text-[17px] md:text-[17px] leading-6 '>Sonaray Songolshi High School,Nilphamari</h2>
                <audio src={song}></audio>
            </div>
        </div>
    );
};

export default School;