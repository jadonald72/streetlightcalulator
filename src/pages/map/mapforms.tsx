import React, {useState} from 'react'
import LocationSearch from './forms/LocationSearch'
import SelectRegion from './forms/SelectRegion'
import RefineTaz from './forms/RefineTaz'
import ConfigureCalculate from './forms/ConfigureAndCalculate'
import DuplicateOption from './forms/DuplicateOption'

function MapForms() {


  return (
    <div className="sidebar w-100 p-5">
      <div className='p-3 rounded-3 text-light bg-normalprimary d-flex align-items-center shadow'>
      {/* <LocationSearch /> */}
      {/* <SelectRegion /> */}
      {/* <RefineTaz /> */}
      <ConfigureCalculate />
      </div>
    </div>
  )
}

export default MapForms