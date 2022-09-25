
import question from './FakeData/Q&A';
import SingleQuestion from './Question';

const Feathers = () => {

   return (
      <div className='h-screen'>
         <div className='p-3'>
            <div className= ' grid grid-cols-1 lg:grid-cols-2  '>
               <div className= ' flex justify-center items-center px-5'>
                  <div>
                     <h1 className=' text-3xl pt-3 font-bold text-[orange]'> কেন আমাদের স্কুলে আপনার সন্তানকে <span className=' text-[#408cee]'> ভর্তি করাবেন ?</span></h1>
                     <p className='text-md pt-2 text-slate-500'>
                        আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো। তাহলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা এবং আপনার মূল্যবান সময় বেঁচে যাবে।
                     </p>
                  </div>
               </div>
               <div>
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