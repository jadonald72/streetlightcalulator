import React from 'react'

function RefineTaz() {
  return (
    <div style={{width: '30em'}}>
      <h2 className='fs-5 fw-normal'>Refine TAZ Selection</h2>
      <div className='bg-midprimary my-4 rounded-2 p-4'>
        <div className='my-2'>
          <span className='bg-paleprimary text-darkprimary p-2 fw-bold'>Number of TAZ Intersecting Region = 14</span>
        </div>
        <div>        
          <p className='pt-4'>
            TAZ that are not fully encompassed by your region but intersect its boundaries 
            are not automatically selected.  You can choose to add or remove TAZ from your selection.
          </p>
        </div>
        <div className='d-flex gap-2'>
          <button className='btn btn-outline-dark rounded-0 btn-sm'>Add to Selection</button>
          <button className='btn btn-outline-dark rounded-0 btn-sm'>Remove from Selection</button>
        </div>
      </div>
      <div className='bg-midprimary rounded-2 p-4'>
        <div className='my-2'>
          <span className='bg-altprimary text-darkprimary p-2 fw-bold'>Number of TAZ Selected = 284</span>
        </div>
      </div>
    </div>
  )
}

export default RefineTaz