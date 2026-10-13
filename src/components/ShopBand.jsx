// BONUS parte 1: componente per la fascia azzurra con le icone
function ShopBand({ items }) {
  return (
    <section className="shop-band">
      <div className="container shop-list">
        {items.map(item => (
          <div key={item.id} className="shop-item">
            <img src={item.img} alt={item.text} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopBand;
