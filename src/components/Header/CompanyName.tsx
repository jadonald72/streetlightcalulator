import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function CompanyName() {
  return (
    <div className="text-white flex-fill">Name of Customer or Company  <FontAwesomeIcon icon={faPen} className="text-primary" /></div>
  )
}

export default CompanyName