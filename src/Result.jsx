import React from 'react';
import Footer from './components/Footer'

const Result = () => {
    return  (
       <div>
          <div className=' flex justify-center items-center mt-[30px] h-screen pb-[10px]  '>
            <h1 className='md:text-2xl lg:text-3xl text-[#fa9715] font-bold'>The Result Is Coming Soon.....</h1>
        </div>
        <div className='right-0 left-0 bottom-0 '>
            <Footer/>
        </div>
       </div>
    );
};

export default Result;