import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import login from './asset/undraw_access_account_re_8spm.svg'
import Signup from './asset/undraw_my_app_re_gxtj.svg'
import { IoMdClose } from 'react-icons/io';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [modal, setModal] = useState(false)
    const [open, setOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY >= 50 ? setHidden(true) : setHidden(false);
        });
    });

    return (
        <div>
            {
                modal && (<div className='h-full  z-10 flex justify-center items-center bg-[rgba(101,59,148,0.86)] fixed top-0 bottom-0 right-0 left-0'>
                    <div className='h-450px w-3/4 rounded-lg bg-[rgb(12,26,49,.33)] '>
                        <div>
                            <div className='flex justify-end m-5 text-2xl text-white'>
                                <IoMdClose onClick={() => setModal(!true)}></IoMdClose>
                            </div>
                            <div className='p-2'>
                                <div className='flex justify-center gap-2 mb-2'>
                                    <button onClick={() => setToggle(!true)} 
                                    className={toggle ? 
                                    'w-[150px]  bg-black py-2' : 
                                    'bg-indigo-800 w-[150px] border outline-none border-white'}>
                                    Login
                                     </button>
                                    <button onClick={() => setToggle(true)} 
                                    className={toggle ? 
                                    'bg-indigo-800 w-[150px] border outline-none border-white' :
                                    "w-[150px] bg-black py-2 "}> Regestration</button>
                                </div>
                                {
                                    !toggle ?
                                        (<div className='container mx-auto my-4 p-5 flex justify-center w-[80%] bg-[rgb(12,26,49,.20)]'>
                                            <div className='hidden lg:block md:block'>
                                                <img className='h-[350px] w-full' src={login} alt="" />
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <div className='p-2'>
                                                    <div className='p-1'>
                                                        <input className='input ' placeholder='Email' type="text" required name="" id="" />
                                                    </div>
                                                    <div className='p-1'>
                                                        <input className='input' placeholder='Password' type="password" name="" id="" />
                                                    </div>
                                                    <div className='p-1'>
                                                        <button className='border border-blue-600 w-[100px] p-1 bg-slate-900'>Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>) :

                                        (<div className='container w-full mx-auto my-4 p-5 flex lg:justify-center lg:w-[80%] bg-[rgb(12,26,49,.20)]'>
                                            <div className='flex justify-center items-center'>
                                                <div className='p-1 '>
                                                    <div className='p-0'>
                                                        <input className='input' type="text" name="" id="" placeholder='First Name' />
                                                    </div>
                                                    <div className='p-0'>
                                                        <input className='input' type="text" name="" id="" placeholder='Last name' />
                                                    </div>
                                                    <div className='p-0' >
                                                        <input className='input' type="email" name="" id="" placeholder='Email' />
                                                    </div>
                                                    <div className='p-0' >
                                                        <input className='input' type="password" name="" id="" placeholder='Password' />
                                                    </div>
                                                    <div className='p-0'>
                                                        <input className='input' type="password" name="" id="" placeholder='Confirm Password' />
                                                    </div>
                                                    <div className='p-1'>
                                                        <button className='border border-blue-600 w-[100px] p-1 bg-slate-900'>SignUP</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='hidden  lg:block md:block'>
                                                <img className='h-[350px] w-full' src={Signup} alt="" />
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>)

            }
            <div className={`${hidden ? ' fixed w-full h-[75px] top-0 border-none shadow-sm shadow-gray-100  ' : 'static'} h-[45px] bg-[#002147] border border-t-1 border-b-2 border-b-red-500 border-gray-500 items-center flex justify-end  md:justify-start md:items-center`}>
                <div className='block md:hidden lg:hidden'>
                    <div className='mr-4 p-2 '>
                        {
                            open ? <IoMdClose onClick={() => setOpen(!open)} className='text-2xl font-bold  ' /> : <FaBars onClick={() => setOpen(!open)} />
                        }
                    </div>
                </div>
                <ul className={` ${open ? 'block mt-[397px] absolute  text-sm bg-slate-200 w-[60%] z-10 right-0 text-black' : 'hidden  md:flex md:justify-start md:ml-3 -right-[350px] text-white'} `}>

                    <li className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>
                        <a href='#about'> About Us </a>
                    </li>
                    <li className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>
                        <Link to='/student__information'>StudentInformation</Link>
                    </li>
                    <li className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>
                        <Link to='/Teacher__information'>TeachersInformation</Link>
                    </li>
                    <li className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>

                        <Link to='/result'> Result  </Link>
                    </li>
                    <li className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>
                        <a href='#contact'> Contact </a> </li>
                    <li className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>
                        <a href='#notice'> Notice </a> </li>
                    <li onClick={() => setModal(true)} className='ml-2 p-3 uppercase  font-mono font-thin   text- md:text-[18px] hover:bg-white cursor-pointer hover:text-neutral-900'>
                        Login
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Navbar;










