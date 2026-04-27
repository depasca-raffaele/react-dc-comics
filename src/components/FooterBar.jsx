import FooterBtn from "./FooterBtn";

function FooterBar() {
  return (
    <div className="footer-bar">
      <FooterBtn />
      <div className="follow-us">
        <span>Follow Us</span>
        <img src="/img/footer-facebook.png" alt="Facebook" />
        <img src="/img/footer-twitter.png" alt="Twitter" />
        <img src="/img/footer-youtube.png" alt="YouTube" />
        <img src="/img/footer-pinterest.png" alt="Pinterest" />
        <img src="/img/footer-periscope.png" alt="Periscope" />
      </div>
    </div>
  )
}
export default FooterBar;