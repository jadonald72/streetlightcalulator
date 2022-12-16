import React from 'react'

function Controls() {
  return (
    <div className='py-2 d-flex'>
        <button className='btn btn-outline-lightprimary disabled btn-lg rounded-0 mx-2'>Back</button>
        <button className='btn btn-outline-lightprimary disabled btn-lg rounded-0 mx-2'>Next</button>
        <button className='btn btn-outline-dark btn-lg rounded-0 mx-2'>Save as Draft</button>
        <button className='btn btn-lightprimary text-darkprimary btn-lg rounded-0 mx-2'>Confirm</button>
    </div>
  )
}

export default Controls