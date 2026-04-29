function FooterLinks({ links }) {
  return (
    <ul className="footer-links">
      {links.map((link) => (
        <li key={link.id}>
          <a href="#">{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
export default FooterLinks;