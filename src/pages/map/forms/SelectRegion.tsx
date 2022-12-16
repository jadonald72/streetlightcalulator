import React , {useState} from 'react'
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function SelectRegion() {
  return (
    <div style={{width: '23em'}}>
      <h2 className='fs-5 fw-normal'>Select Region</h2>
      <p className='mt-4'>
        Select your region of interest.  You can use preset geographies or create your own.  
        Your selection will help determine the amount of TAZ's needed.
      </p>
      <form>
        <Accordion flush className='border border-lightprimary'>
          <Accordion.Item eventKey="0">
          <Accordion.Header className='bg-primary'><FontAwesomeIcon icon={icon({name: 'circle', style: 'regular'})} /> <span className='px-2'>Geographies</span></Accordion.Header>
          <Accordion.Body>
           Drop down here
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><FontAwesomeIcon icon={icon({name: 'circle', style: 'regular'})} /> <span className='px-2'>Draw</span></Accordion.Header>
          <Accordion.Body>
            Some text here explaining how to use the draw tools
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><FontAwesomeIcon icon={icon({name: 'circle', style: 'regular'})} /> <span className='px-2'>Upload</span></Accordion.Header>
          <Accordion.Body>
            Text here and also a file upload box
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </form>
  </div>
  )
}

export default SelectRegion