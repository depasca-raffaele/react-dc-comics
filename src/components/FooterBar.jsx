import FooterBtn from "./FooterBtn";

const socialLinks = [
  { id: 1, name: "Facebook", href: "#", img: "/img/footer-facebook.png" },
  { id: 2, name: "Twitter", href: "#", img: "/img/footer-twitter.png" },
  { id: 3, name: "YouTube", href: "#", img: "/img/footer-youtube.png" },
  { id: 4, name: "Pinterest", href: "#", img: "/img/footer-pinterest.png" },
  { id: 5, name: "Periscope", href: "#", img: "/img/footer-periscope.png" },
];

function FooterBar() {
  return (
    <div className="footer-bar">
      <div className="container-xl d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <FooterBtn />
        <div className="follow-us">
          <span>Follow Us</span>
          {socialLinks.map((social) => (
            <a key={social.id} href={social.href} aria-label={social.name}>
              <img src={social.img} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterBar;