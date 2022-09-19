import React from 'react';
import { FaFacebookF } from 'react-icons/fa'
import { GrYoutube } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im';



const Contact = () => {
    return (
        <div id='contact'>
            <h1 className='flex justify-center text-2xl md:text-2xl lg:text-3xl md:text-[40px]  mb-4 mt-4 pb-7 font-bold'><span className='pr-3 text-orange-400'>যোগাযোগের</span> জন্য </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:container md:mx-auto p-8 ' >
                <div
                    className='leading-10  flex justify-center items-center'>
                    <div>
                        <h1 className='text-4xl'>Sonaray Songolshi High School </h1>
                        <h2 className='text-2xl pt-3 mt-5'>Cell:7851515615</h2>
                        <h3 className='text-2xl pt-3 mt-5'>Email:kolmilota@gmail.com</h3>
                        <div className='flex justify-start items-center mt-8 ml-5 '>
                   
                         <a href="https://web.facebook.com/bisom66" target="_blank" rel="noopener noreferrer">   <FaFacebookF className=' transition-all duration-1000 
                                      ease-in-out cursor-pointer 
                                      w-16 h-16 rounded-full text-md bg-white text-blue-800 p-3 
                                      hover:bg-blue-800 hover:text-white'>
                                </FaFacebookF>
                                </a>
                  
                                <GrYoutube className=' transition-all duration-1000 
                                   ease-in-out w-16 h-16 text-md p-3 ml-3  cursor-pointer 
                                   rounded-full text-center text-red-800
                                 bg-white hover:bg-red-700
                                 hover:text-white'>     
                                </GrYoutube>
                                <ImWhatsapp  className=' transition-all duration-1000 
                                   ease-in-out w-16 h-16 text-md p-3 ml-3  cursor-pointer 
                                   rounded-full text-center text-[#4BC759]
                                 bg-white hover:bg-[#4BC759]
                                 hover:text-white'>

                                </ImWhatsapp>
                      
                        </div>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.2929888807557!2d88.85736921434183!3d25.8598327108447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e359f0ae94245d%3A0xcf41f64e8bca21d6!2z4Ka44KeL4Kao4Ka-4Kaw4Ka-4KefIOCmuOCmguCml-CmsuCmtuCngCDgpongpprgp43gppog4Kas4Ka_4Kam4KeN4Kav4Ka-4Kay4Kef!5e0!3m2!1sbn!2sbd!4v1661929338071!5m2!1sbn!2sbd"
                        width="550" height="320"
                        style={{ border: 0 }}
                        allowfullscreen="true"
                        loading="lazy"
                        title='sonaray__songolshi__high__school'
                        referrerpolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </div>
    );
};

export default Contact;