import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function LocationSearch() {
  return (
    <div style={{width: '30em'}}>
      <h2 className='fs-5 fw-normal'>Locate Region</h2>
      <form>
        <div className="input-group mb-3 border-0 mt-3">
          <span className="input-group-text border-0 rounded-0 p-3 text-light bg-lightprimary"> <FontAwesomeIcon icon={faSearch} /></span>
          <input type="text" className='form-control border-0 rounded-0  bg-lightprimary text-light' placeholder='Search for an address, place, state, etc'/>
        </div>
      </form>
    </div>
  )
}

export default LocationSearch