import React from "react";
import Input from "./Input";

export default function Personal() {
	return (
		<div >
			<div class='mt-5 flex flex-col md:flex-row md:space-x-12'>
				<div class="md:w-1/2">
					<Input
						type='text'
						placeholder='Enter your full name'
						label='First Name'
					/>
				</div>
				<div class="md:w-1/2">
					<Input
						type='text'
						placeholder='Enter your full name'
						label='Last Name'
					/>
				</div>
			</div>

			<Input
				type='email'
				placeholder='Enter your e-mail'
				label='Email Address'
			/>

			<div class='flex flex-col md:flex-row md:space-x-12 space-y-6'>
				<div class='w-full pt-6 md:w-1/2 px-1 mb-6 md:mb-0'>
					<label
						class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						for='grid-state'
					>
						Gender
					</label>
					<div class='relative'>
						<select
							class='block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-state'
						>
                            <option>Choose</option>
							<option>Male</option>
							<option>Female</option>
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
				<div class="md:w-1/2">
					<Input
						type='tel'
						placeholder='Enter your Phone Number'
						label='Phone Number'
					/>
				</div>
			</div>

			<div class='flex flex-col md:flex-row md:space-x-12 space-y-6 pb-7 md:pb-7'>
                <div class="pt-5 md:w-1/2">
				<Input type='text' placeholder='Enter your Location' label='Location' />
                </div>
				<div class='w-full md:w-1/2 px-1 mb-6 md:mb-0'>
					<label
						class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						for='grid-state'
					>
						Level of Education
					</label>
					<div class='relative'>
						<select
							class='block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-state'
						>
                            <option>Choose</option>
							<option>SSCE</option>
							<option>OND</option>
							<option>HND</option>
							<option>Undergraduates</option>
							<option>BSc</option>
							<option>Masters</option>
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
		</div>
	);
}
