// BONUS parte 3: i dati partono tutti da App e scendono ai figli come props
import comics from './data/comics.js';
import { navLinks, shopItems, footerColumns, socials } from './data/links.js';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import ShopBand from './components/ShopBand.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header links={navLinks} />
      <Main comics={comics} />
      <ShopBand items={shopItems} />
      <Footer columns={footerColumns} socials={socials} />
    </>
  );
}

export default App;
