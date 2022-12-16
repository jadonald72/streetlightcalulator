import { Fragment } from "react";
import Stepper from "./Stepper";
import Controls from "./Controls";

 function Footer() {
  return (
    <Fragment>
      <footer className="bg-darkprimary text-light d-flex flex-row align-items-center">
        <Stepper />
        <Controls />
      </footer>
    </Fragment>
  );
}

export default Footer;
