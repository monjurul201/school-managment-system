import React from 'react';
import { FaFacebookF } from 'react-icons/fa'
import { GrYoutube } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer className='relative  w-full bg-[#3586ff] min-h-[100px] pl-5 pr-12
            flex justify-evenly items-center md:flex-row sm:flex-row  lg:flex-row mt-[100px] flex-col-reverse'>
                <div className="waves">
                    <div className="wave" id='wave1'></div>
                    <div className="wave" id='wave2'></div>
                    <div className="wave" id='wave3'></div>
                    <div className="wave" id='wave4'></div>
                </div>
                <div>
                    <div className='flex justify-center items-center  mt-5 pb-3'>
                       <div> <h2> Powered by</h2>
                        <h1 className=' text-xl md:text-2xl lg:text-2xl'>Md. Monjurul Islam</h1></div>
                    </div>
                </div>
                <ul className='social__icon relative flex justify-center items-center sm:ml-[10px] mr-0 md:mt-0 lg:mt-0 mt-5 flex-wrap'>
                    <li className='list-none'>
                        <a className='text-[2em] duration-500 text-white ml-0 mr-3 inline-block ' href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                    </li>
                    <li className='list-none'>
                        <a className='text-[2em] duration-500 text-white ml-0 mr-3 inline-block ' href="http://" target="_blank" rel="noopener noreferrer"><GrYoutube/> </a>
                    </li>
                    <li className='list-none'>
                        <a className='text-[2em] duration-500 text-white ml-0 mr-3 inline-block ' href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
                    </li>
                </ul>
                <ul className=' relative'>
                    <li className='list-none'> <Link to='/'  className='text-[1.1em] duration-500 hover:opacity-40 text-white ml-0 mr-3 inline-block '>Home</Link></li>
                    <li className='list-none'> <a  className='text-[1.1em] duration-500 hover:opacity-40 text-white ml-0 mr-3 inline-block ' href="http://ssss.com">Privacy</a></li>
                    <li className='list-none'> <a  className='text-[1.1em] duration-500 hover:opacity-40 text-white ml-0 mr-3 inline-block ' href="http://ssss.com">Success</a></li>
                    <li className='list-none'> <a  className='text-[1.1em] duration-500 hover:opacity-40 text-white ml-0 mr-3 inline-block ' href="http://ssss.com">Community</a></li>
            
                </ul>
             
            </footer>

        </>
    );
};

export default Footer;