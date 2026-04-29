function Main({comics}) {
  return (
    <>
      <section className="hero-banner" />

      <main className="main">
        <div className="container-xl position-relative">
          <div className="current-series-badge">Current Series</div>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
            {comics.map((comic) => (
              <div className="col" key={comic.id}>
                <a href="#" className="comic-card">
                  <div className="comic-thumb-wrap">
                    <img src={comic.thumb} alt={comic.series} className="comic-thumb" />
                  </div>
                  <h3>{comic.series}</h3>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 mt-lg-5">
            <button className="btn load-more-btn">Load More</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;