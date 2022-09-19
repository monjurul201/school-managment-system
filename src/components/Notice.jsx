import React from 'react';
import notice from './FakeData/data.js'

const Notice = () => {
    console.log([...notice]);
    const data =[...notice].reverse();

    return (
        <div className='w-full mt-10' id='notice'>
            <div>
                <h1 className='flex justify-center items-start  text-2xl md:text-2xl lg:text-3xl md:text-[40px] p-4 my-1 text-[#24ACF2] font-bold'>নোটির্স  <span className='text-[#fa9715] ml-2'>বোর্ড</span></h1>
            </div>
            <div data-aos="fade-right"
               data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                className='h-[70vh] w-full scrollbar p-2' id='style-2'>
                <div className=' force-overflow container mx-auto p-7'>
                    <div className='flex justify-center'>
                        <div>
                            <table className='w-full overflow-x-auto text-sm text-left text-slate-400 '>
                                <thead className='text-md font-thin uppercase text-[#24ACF2] overflow-x-auto'>
                                    <tr className=' '>
                                        <th className='py-3 px-6 text-md bg'>নোটির্স</th>
                                        <th className='py-3 px-6 text-md w-[96px]'>দেখুন </th>
                                    </tr>
                                </thead>
                                <tbody className='capitalize text-lg overflow-x-auto'>
                                    {
                                        data.map((notice, index) =>
                                            <tr className='border border-t-1 mr-2  border-slate-500' key={index}>
                                                <td className='text-sm h-10 px-2'>
                                                    {notice.title}
                                                </td>
                                                <td className='  text-sm cursor-pointer h-10 border-l border-slate-500 px-2 w-[117px]'>
                                                    <a  className='rounded-md border  border-cyan-700 p-1 text-[#f58e07] font-mono' href={notice.url2} target="_blank" rel="noopener noreferrer">
                                                        নোটির্স দেখুন
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;