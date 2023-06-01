import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { motion } from "framer-motion"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='bg-white h-[10vh]  w-full'>
      <div className='h-[10vh] flex justify-between items-center px-6 fixed top-0 left-0 right-0 z-30 bg-white shadow-md '>
        <div>
          <h1>logo</h1>
        </div>

        <div className=' '>
         <div className='hidden lg:flex lg:gap-8 lg:items-center'>
         <motion.span  initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}>
            <Link to='/' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>Home</Link>
          </motion.span> 
          
          <motion.span initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}>
            <Link to='/' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>Services</Link>
          </motion.span> 
          
          <motion.span initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}>
            <Link to='/' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>About us</Link>
          </motion.span> 
          
         <motion.span initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}>
            <Link to='/login' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>Login</Link>
          </motion.span> 
          
        
          
         
          <Link to='/sing-up' className='singup-btn px-6 py-[6px] rounded shadow-sm cursor-pointer'>
            <p  className='text-base text-white'>Singup</p>
          </Link>
         </div>
       
       
        {/* smail icon */}
            <div onClick={() => setShow(true)} className='w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-black cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-red-400 inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>

                    <span className='w-full h-[2px] bg-red-400 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>

                    <span className='w-full h-[2px] bg-red-400 inline-flex transform  translate-x-1 group-hover:translate-x-3  transition-all ease-in-out duration-300'></span>
                </div>



            {
              show && (
                <motion.div initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }} className='absolute lg:hidden top-0 right-0 w-full h-screen  flex flex-col items-end'>

                  <div  className='w-[80%] h-full  bg-[#112240] flex flex-col items-center px-4 py-10 z-50 relative'>


                  <IoMdClose onClick={() => setShow(false)} className='text-3xl cursor-pointer text-red-500 absolute top-4 right-4 duration-300' />

                    
                  <div className='flex flex-col justify-center gap-5 items-center mt-14'>
                  <motion.span onClick={() => setShow(false)}  initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}>
            <Link to='/' className='text-base text-white'>Home</Link>
          </motion.span> 
          
          <motion.span onClick={() => setShow(false)} initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}>
            <Link to='/' className='text-base text-white'>Services</Link>
          </motion.span> 
          
          <motion.span onClick={() => setShow(false)} initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}>
            <Link to='/' className='text-base text-white'>About us</Link>
          </motion.span> 
          
         <motion.span onClick={() => setShow(false)} initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}>
            <Link to='/login' className='text-base text-white'>Login</Link>
          </motion.span> 
          
           <Link onClick={() => setShow(false)} to='/sing-up' className='singup-btn px-6 py-[6px] rounded shadow-sm cursor-pointer'>
            <p  className='text-base text-white'>Singup</p>
          </Link>
         </div>

                  </div>
                  
                </motion.div>
              )
            }
       
       
       
        </div>


          
      </div>
    </div>
  )
}

export default Navbar