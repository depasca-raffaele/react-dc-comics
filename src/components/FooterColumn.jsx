import FooterLinks from "./FooterLinks";

function FooterColumn({ column, links }) {
  return (
    <div className="footer-column">
      <div className="footer-section">
        <h4>{column.title}</h4>
        <FooterLinks links={links} />
      </div>
    </div>
  );
}
export default FooterColumn;