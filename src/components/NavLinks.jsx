function NavLinks({links}) {
  return (
    <ul className="nav-links mb-0">
      {links.map((item) => (
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