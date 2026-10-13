// componente riutilizzabile: riceve i dati del SINGOLO fumetto come props
// destructuring delle props direttamente nei parametri
function ComicCard({ thumb, series }) {
  return (
    <div className="comic-card">
      <img src={thumb} alt={series} />
      <h3>{series}</h3>
    </div>
  );
}

export default ComicCard;
