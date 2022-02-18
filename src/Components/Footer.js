import React from 'react';
import logo from "./Images/logo.png";
import line from "./Images/Line.png"

function Footer() {
  return (
    <div className='pt-10'>
        <div>
           <p classname="text-center"> By giving participation hands-on tasks that would broaden their scope, we guide
            motivate and assist determined, tech-oriented young brains in becoming the 
            world's premier expert on their individual based technological competence.
            </p>
        </div>

        <div>
        <img src={line} alt='star' className='object-center ' />
        </div>

        <div class="flex flex-row">
        <div>
        <img src={logo} alt='star' className='flex flex-col items-start justify-start' />
        </div>
  
  <div className='flex flex-col items-end justify-end'>
      <p className='text-right'>
          Phone: =234 512-588-3997
      </p>
      <p>
          Email: contact@segsalerty.com
      </p>
  </div>
 
</div>

    </div>
  )
}

export default Footer