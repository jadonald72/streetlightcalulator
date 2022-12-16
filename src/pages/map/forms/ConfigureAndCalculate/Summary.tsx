import React from 'react'

function Summary() {
  return (
    <div className='p-4 bg-midprimary rounded-2'>
      <h3>Summary</h3>
      <div className='row mt-4'>
        <div className='col-sm-12 col-md-6'>
          <div className='bg-darkprimary w-50 border border-secondary'>
            <div className='border-bottom border-secondary p-2'>
              <div className="form-check text-dark">
                <input className="form-check-input" type="radio" name="exampleRadios" id="solution" value="solution" checked />
                <label className="form-check-label" htmlFor="solution">
                  Solution Package
                </label>
              </div>
            </div>
            <div className='p-2'>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="mode" value="mode" />
                <label className="form-check-label" htmlFor="mode">
                  Mode Package
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='text-darkprimary fw-bold justify-content-end d-flex gap-2'>
            <span className='bg-altprimary p-2'>284 TAZ</span>
            <span className='bg-paleprimary p-2'>10 Seats</span>
            <span className='bg-altsecondary p-2'>Grand Total $50,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary