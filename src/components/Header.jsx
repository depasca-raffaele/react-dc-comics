import NavLinks from "./NavLinks";

const navLinks = [
  { id: 1, label: "Characters", href: "#", active: false },
  { id: 2, label: "Comics", href: "#", active: true },
  { id: 3, label: "Movies", href: "#", active: false },
  { id: 4, label: "TV", href: "#", active: false },
  { id: 5, label: "Games", href: "#", active: false },
  { id: 6, label: "Collectibles", href: "#", active: false },
  { id: 7, label: "Videos", href: "#", active: false },
  { id: 8, label: "Fans", href: "#", active: false },
  { id: 9, label: "News", href: "#", active: false },
  { id: 10, label: "Shop", href: "#", active: false },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container-xl d-flex align-items-center justify-content-between">
        <img src="/img/dc-logo.png" alt="DC Logo" />
        <NavLinks links={navLinks}/>
      </div>
    </header>
  );
}

export default Header;