// BONUS parte 2: i link del footer generati con l'iterazione (map dentro map)
function Footer({ columns, socials }) {
  return (
    <footer>
      <div className="footer-top">
        <div className="container footer-columns">
          {columns.map(column => (
            <div key={column.id}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <button className="btn-outline">Sign-up now!</button>
          <div className="socials">
            <span>Follow us</span>
            {socials.map(social => (
              <img key={social.id} src={social.img} alt={social.name} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
