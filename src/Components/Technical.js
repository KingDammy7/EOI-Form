import React from 'react';
import Input from './Input';

export default function Technical() {

  return (
    <div>
      
      
      <div class='flex flex-col items-center justify-center  md:flex-row md:space-x-12 space-y-6 pb-7 md:pb-7'>
      <div class='w-full pt-6 md:w-1/2 px-1 mb-6 md:mb-0'>
					<label
						class='block uppercase tracking-wide text-gray-700 text-xs mb-2'
						for='grid-state'
					>
						Technical skills Interested In
					</label>
					<div class='relative '>
						<select
							class='block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-state'
						>
                            <option>Choose</option>
							<option>UI/UX</option>
							<option>Front End Development</option>
							<option>Back End development</option>
							<option>QA testing</option>
							<option>Data science</option>
							<option>DevOps</option>
                            <option>Mobile Application Development</option>
                            <option>Technical Product Management - SCRUM MASTER</option>
                            <option>Others</option>
						</select>
						<div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
							<svg
								class='fill-current h-4 w-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
							>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
							</svg>
						</div>
					</div>
				</div>
                
                <div class='w-full md:w-1/2 px-1 mb-6 md:mb-0'>
					<label
						class='block uppercase tracking-wide text-gray-700 text-xs mb-2'
						for='grid-state'
					>
						Do you have basic knowledge of the selected skill?
					</label>
					<div class='relative'>
						<select
							class='block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-state'
						>
                            <option>Choose</option>
							<option>Yes</option>
							<option>No</option>
							<option>Still Learning</option>
						</select>
						<div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
							<svg
								class='fill-current h-4 w-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
							>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
							</svg>
						</div>
					</div>
				</div>
				
			</div>
      <div class="py-2">
      <Input type="text" label="What would you describe as most challenging in your selected field" />
      </div>
      <div class="py-2">
      <Input type="text" label="Have you worked on any project in the past? Give details of the one you feel most impressed about" />
      </div>

      <div class="flex flex-col md:flex-row md:space-x-12">
      <div class="py-2 md:w-1/2">
      <Input type="text" label="Do you have a Github URL? Kindly drop the link" />
      </div>
      <div class="py-2 md:w-1/2">
      <Input type="text" label="Why do you want to join my network?" />
      </div>
 
</div>
    
    </div>
  )
}