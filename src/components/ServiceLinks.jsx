

function ServiceLinks({links}) {
  return (
    <ul className="service-links row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4 mb-0 ps-0">
      {links.map((item) => (
        <li className="col" key={item.id}>
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