import React from 'react'

function Stepper() {
  return (
    <div className="p-2 flex-grow-1 d-flex align-items-center">
    <div className='text-light px-2'>Step 1 of 4</div>
      <div className="progress bg-lightprimary rounded-0 flex-fill m-3" style={{height:'4px'}}>
          <div className="progress-bar bg-altprimary rounded-0" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}}></div>
      </div>
    </div>
  )
}

export default Stepper