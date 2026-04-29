import FooterColumn from "./FooterColumn";
import {footerColumns, footerLinks} from "../data/footerData";


function Footer() {
  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="footer-grid">
          {footerColumns.map((col) => (
            <FooterColumn
              key={col.id}
              column={col}
              links={footerLinks.filter((link) => link.columnId === col.id)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;