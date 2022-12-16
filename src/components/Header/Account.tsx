import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

 function Account() {
  return (
    <div className="btn-group p-3">
      <button className="btn btn-outline-paleprimary px-3 dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        <FontAwesomeIcon icon={faUser} className="px-2"/>
      </button>
      {/* <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
        <li><a className="dropdown-item" href="#">Menu item</a></li>
        <li><a className="dropdown-item" href="#">Menu item</a></li>
        <li><a className="dropdown-item" href="#">Menu item</a></li>
      </ul> */}
    </div>
  );
}

export default Account;
