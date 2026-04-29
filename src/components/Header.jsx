import NavLinks from "./NavLinks";

function Header() {
  return (
    <header className="site-header">
      <div className="container-xl d-flex align-items-center justify-content-between">
        <img src="/img/dc-logo.png" alt="DC Logo" />
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;