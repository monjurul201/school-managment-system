import React from 'react';
import teachers from './FakeData/teachers';
import { Link } from 'react-router-dom';

const TeachersInformation = () => {
    //console.log(teachers);
    return (
        <div>
            <div className='h-1/4 mt-10 ml-8 pb-6 '>
                <button className='text-2xl hover:bg-slate-800 hover:scale-105 ease-in-out transition-all duration-500 border border-1 border-slate-400 outline-none p-2 rounded-full w-48'>
                    <Link to='/'> হোমে ফিরে <span className='text-[#fa9715]'>যাই </span> </Link>
                </button>
            </div>
            <div className=' p-2  w-full '>
                <div className=' container mt-5 mx-auto w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5  2xl:w-full gap-2'>
                    {
                        teachers.map((teacher, index) =>
                            <div className=' border-r border-slate-800 bg-slate-900 duration-500 
                               hover:shadow-md hover:shadow-slate-700
                               hover:skew-y-0
                             hover:bg-cyan-900 
                               hover:-translate-y-3 
                               p-4 mb-5 flex 
                               justify-around
                               w-full ' key={index}>
                                <div className='flex justify-center items-center '>
                                    <img className=' h-28 ring-4 ring-purple-900 rounded-full md:h-24' src={teacher.Image} alt="" />
                                </div>
                                <div className='text-slate-400 flex justify-center items-center'>
                                    <div>
                                        <h1 className='text-md text-cyan-600'>{teacher.name}</h1>
                                        <p className='text-[13px]'>{teacher.address}</p>
                                        <p className='text-[13px]'>{teacher.email}</p>
                                        <p className='text-[13px]'>{teacher.Phone}</p>
                                    </div>
                                </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TeachersInformation;