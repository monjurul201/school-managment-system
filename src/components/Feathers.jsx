
import question from './FakeData/Q&A';
import SingleQuestion from './Question';

const Feathers = () => {

   return (
      <div className= 'pb-16'>
         <div className='p-3'>
            <div className= ' grid grid-cols-1 lg:grid-cols-2  '>
               <div className= ' h-[250px] flex justify-center items-center lg:px-5'>
                  <div>
                     <h1 className=' text-xl lg:text-4xl pt-3 font-bold text-[orange]'> কেন আমাদের স্কুলে আপনার সন্তানকে <br /> <span className=' text-[#408cee]'> ভর্তি করাবেন ?</span></h1>
                     <p className='text-xl  pt-2 text-slate-500'>
                        আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো। তাহলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা এবং আপনার মূল্যবান সময় বেঁচে যাবে।
                     </p>
                  </div>
               </div>
               <div className='h-[400px]'>
                  {
                     question.map((question, index) =>
                        <SingleQuestion key={index} {...question}> </SingleQuestion>)
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default Feathers;