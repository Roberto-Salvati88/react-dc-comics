import ComicCard from './ComicCard.jsx';

function Main({ comics }) {
  return (
    <main>
      <div className="jumbotron"></div>
      <section className="comics">
        <div className="container">
          <h2 className="series-label">Current series</h2>
          <div className="comics-grid">
            {comics.map(comic => (
              <ComicCard key={comic.id} thumb={comic.thumb} series={comic.series} />
            ))}
          </div>
          <div className="center">
            <button className="btn-blue">Load more</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
