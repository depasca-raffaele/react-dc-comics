import ServiceLinks from "./ServiceLinks";

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

function ServiceBar() {
  return (
    <section className="service-bar">
      <div className="container-xl">
        <ServiceLinks links={serviceLinks} />
      </div>
    </section>
  );
}

export default ServiceBar;