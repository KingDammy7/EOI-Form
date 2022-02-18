import React from 'react'
import Button from './Button'

function Submit() {
    
  return (
    <div>
        <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id" >
   	<div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      
      <div class="">
        
        <div class="text-center p-5 flex-auto justify-center">
                
                        <h2 class="text-2xl font-bold py-4 ">Submit to become part of our amazing talent pool</h2>
                        <p class="text-sm underline text-gray-500 px-8">Preview my responses</p>    
        </div>
        
        <div class="p-3  mt-2 text-center space-x-4 md:block">
            <Button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-black underline rounded-full hover:shadow-lg hover:bg-gray-100" >
                Back
            </Button>
            <Button class="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">Submit</Button>
        
        
        
        </div>
      </div>
    </div>
  </div>
  </div>
    
  )
}

export default Submit