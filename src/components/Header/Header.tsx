import { Fragment } from "react";
import Account from "./Account";
import Logo from "./Logo";
import CompanyName from "./CompanyName";

 function Header() {
  return (
    <Fragment>
      <header className="bg-darkprimary d-flex align-items-center">
        <Logo />
        <CompanyName />
        <Account />
      </header>
    </Fragment>
  );
}

export default Header;
