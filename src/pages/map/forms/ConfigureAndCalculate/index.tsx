import React from 'react'
import Summary from './Summary'
import Subscriptions from './Subscriptions'
import ExtraSeats from './ExtraSeats'
import SpecialAccess from './SpecialAccess'
import Support from './Support'
import Training from './Training'
import Services from './Services'
import CustomAddons from './CustomAddons'
import MetricsIncluded from './MetricsIncluded'


function ConfigureCalculate() {
  return (
    <div className="w-100 p-3">
      <h2 className='fs-5 fw-normal mb-3'>Configure and Calculate</h2>
      <div className='row'>
        <div className='col-sm-12'>
          <Summary />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <Subscriptions />
          <ExtraSeats />
          <SpecialAccess />
        </div>
        <div className='col-sm-12 col-md-6'>
          <Support />
          <Training />
          <Services />
          <CustomAddons />
        </div>
      </div>
      
    </div>
  )
}

export default ConfigureCalculate