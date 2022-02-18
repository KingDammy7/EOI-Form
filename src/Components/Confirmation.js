import React from 'react';

export default function Confirmation() {
  return (
    <div>
      <p className="text-center">Understand that this is not a paid job. However, there is an opportunity to get worthy talents compensated or referred to be part of paid projects
      to encourage and motivate from time to time</p>
     
      <div class="flex flex-col items-center justify-center">
    <div class="mt-6 mb-7 py-5 px-10 max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div class="flex flex-col">
            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked/><span class="ml-2 text-gray-700">Yes, I understand</span>
            </label>

            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600"/><span class="ml-2 text-gray-700">No</span>
            </label>
           
        </div>
    </div>
</div>

    </div>
  )
}