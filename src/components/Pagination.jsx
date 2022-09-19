import React from 'react';

const Pagination = ({totalStudents,paginate,studentPerPage}) => {
   
const pages=[];
for(let i=1;i<=totalStudents/studentPerPage;i++){
    pages.push(i);
}

    return (
        <div className=''>
            <ul className='flex justify-center '>
                {
                    pages.map(number=>( <li onClick={()=> paginate(number)} className='m-1 border border-slate-800
                    p-2 cursor-pointer' key={number}>{number}</li>))
                }
            </ul>
        </div>
    );
};

export default Pagination;