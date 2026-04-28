const serviceLinks = [
  {
    id: 1,
    label: "Digital Comics",
    href: "#",
    img: "/img/buy-comics-digital-comics.png",
    alt: "Digital Comics",
  },
  {
    id: 2,
    label: "DC Merchandise",
    href: "#",
    img: "/img/buy-comics-merchandise.png",
    alt: "DC Merchandise",
  },
  {
    id: 3,
    label: "Subscription",
    href: "#",
    img: "/img/buy-comics-subscriptions.png",
    alt: "Subscription",
  },
  {
    id: 4,
    label: "Comic Shop Locator",
    href: "#",
    img: "/img/buy-comics-shop-locator.png",
    alt: "Comic Shop Locator",
  },
  {
    id: 5,
    label: "DC Power Visa",
    href: "#",
    img: "/img/buy-dc-power-visa.svg",
    alt: "DC Power Visa",
  },
];

function ServiceLinks() {
  return (
    <ul className="service-links">
      {serviceLinks.map((item) => (
        <li key={item.id}>
          <a href={item.href}>
            <img src={item.img} alt={item.alt} />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ServiceLinks;