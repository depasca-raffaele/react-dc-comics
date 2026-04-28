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

function NavLinks() {
  return (
    <ul className="nav-links">
      {navLinks.map((item) => (
        <li key={item.id}>
          <a href={item.href} className={item.active ? "active" : ""}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;