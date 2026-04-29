import FooterColumn from "./FooterColumn";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="footer-grid">
          <FooterColumn />
          <FooterColumn />
          <FooterColumn />
        </div>
      </div>
    </footer>
  );
}

export default Footer;