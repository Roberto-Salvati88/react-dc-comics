// la navbar è dinamica: ricevo l'array dei link e lo stampo con map
// ogni elemento generato da map ha bisogno di una key univoca
function Header({ links }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <img src="/img/dc-logo.png" alt="DC Comics" className="logo" />
        <nav>
          <ul className="nav-list">
            {links.map(link => (
              <li key={link.id}>
                <a href={link.url} className={link.active ? 'active' : ''}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
