import React from 'react'
import happy from './Images/happy.png'

function Final() {
    
  return (
    <div>
        <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id" >
   	<div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      
      <div class="">
      <div className="flex flex-col items-center justify-center py-6">
			<img src={happy} alt='star' className='object-center ' />
            </div>
        <div class="text-center p-5 flex-auto justify-center">
                
                        <h2 class="text-2xl font-bold py-4 ">Yasss</h2>
                        <p class="text-sm text-gray-500 px-8">We will get back to you via mail</p>    
        </div>
        
        
      </div>
    </div>
  </div>
  </div>
    
  )
}

export default Final