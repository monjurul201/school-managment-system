
import React from 'react';
import DataTable from 'react-data-table-component';


import { useState } from 'react';
import { useEffect } from 'react';
//import studentData from './Dublicate/StudentData.json'
import studentData from './Dublicate/data-siXlmdWFz-wwT71zCy9ze.json'
import { Link } from 'react-router-dom';



const StudentInformation = () => {


  const [search, setSearch] = useState('')
  const [student, setStudent] = useState([]);
  const [filterStudents, setFilterStudents] = useState([])

  useEffect(() => {
    setStudent(studentData)
    setFilterStudents(...studentData, studentData)

  }, [])

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Class',
      selector: row => row.class,
    },
    {
      name: 'Roll',
      selector: row => row.roll,
    },
    {
      name: 'Address',
      selector: row => row.address,
    }
  ]
  useEffect(() => {
    const result = student.filter((std) => {
      return (std.name.toLowerCase().match(search.toLowerCase())
      )
    });
    setFilterStudents(result)
  }, [search])

  const conditionalRowStyles = [
    {
      when: row => row.class < 10 && row.class > 8,
      style: {
        backgroundColor: 'red',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: row => row.class < 7,
      style: {
        backgroundColor: 'rgba(112, 171, 32, 0.8',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: row => row.class < 9 && row.class >= 8,
      style: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: row => row.class > 9,
      style: {
        backgroundColor: '#3586ff',
        color: 'white',
        fontSize: '20px',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    }

  ]

  return (
    <div className=''>
      <div className='my-2 p-2'>
        <button className='text-2xl hover:bg-slate-800 hover:scale-105 ease-in-out transition-all duration-500 border border-1 border-slate-400 outline-none p-2 rounded-full w-48'>
          <Link to='/'> হোমে ফিরে <span className='text-[#fa9715]'>যাই </span> </Link>
        </button>
       
      </div>

     <div className='mb-10 pb-10'>
     {!search ? (<DataTable
        conditionalRowStyles={conditionalRowStyles}
        className=''
        title={`মোট শিক্ষার্থী: ${student.length.toLocaleString("bn-BD")}`}
        columns={columns}
        data={student}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='600px'
        highlightOnHover
        subHeader
        subHeaderComponent={
          <div className=' flex justify-between'>
            <div> <input type="text" className=' w-full  rounded-md p-2 text-black
                  border-2 border-slate-800
                  mr-5'
              placeholder='Search student'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input></div>
          </div>
        }
        subHeaderAlign='center'
      />) :

        <DataTable
          conditionalRowStyles={conditionalRowStyles}
          className=''
          title={`মোট শিক্ষার্থী: ${student.length.toLocaleString("bn-BD")}`}
          columns={columns}
          data={filterStudents}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='400px'
          highlightOnHover
          subHeader
          subHeaderComponent={
            <div className=' flex justify-between'>
              <div> <input type="text" className=' w-full  rounded-md p-2 text-black
                  border-2 border-slate-800
                  mr-5'
                placeholder='Search student'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input></div>
            </div>
          }
          subHeaderAlign='center'
        />
      }
     </div>
   
    </div>
  );
};

export default StudentInformation;