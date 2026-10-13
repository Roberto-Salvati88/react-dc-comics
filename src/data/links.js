// Struttura dati per navbar e footer: un array di oggetti, così li stampo con map
export const navLinks = [
  { id: 1, text: 'Characters', url: '#', active: false },
  { id: 2, text: 'Comics', url: '#', active: true },
  { id: 3, text: 'Movies', url: '#', active: false },
  { id: 4, text: 'TV', url: '#', active: false },
  { id: 5, text: 'Games', url: '#', active: false },
  { id: 6, text: 'Collectibles', url: '#', active: false },
  { id: 7, text: 'Videos', url: '#', active: false },
  { id: 8, text: 'Fans', url: '#', active: false },
  { id: 9, text: 'News', url: '#', active: false },
  { id: 10, text: 'Shop', url: '#', active: false }
];

export const shopItems = [
  { id: 1, text: 'Digital comics', img: '/img/buy-comics-digital-comics.png' },
  { id: 2, text: 'DC merchandise', img: '/img/buy-comics-merchandise.png' },
  { id: 3, text: 'Subscription', img: '/img/buy-comics-subscriptions.png' },
  { id: 4, text: 'Comic shop locator', img: '/img/buy-comics-shop-locator.png' },
  { id: 5, text: 'DC power visa', img: '/img/buy-dc-power-visa.svg' }
];

// BONUS: link del footer raggruppati per colonna
export const footerColumns = [
  { id: 1, title: 'DC Comics', links: ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'] },
  { id: 2, title: 'Shop', links: ['Shop DC', 'Shop DC Collectibles'] },
  { id: 3, title: 'DC', links: ['Terms Of Use', 'Privacy policy', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us'] },
  { id: 4, title: 'Sites', links: ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa'] }
];

export const socials = [
  { id: 1, name: 'Facebook', img: '/img/footer-facebook.png' },
  { id: 2, name: 'Twitter', img: '/img/footer-twitter.png' },
  { id: 3, name: 'YouTube', img: '/img/footer-youtube.png' },
  { id: 4, name: 'Pinterest', img: '/img/footer-pinterest.png' },
  { id: 5, name: 'Periscope', img: '/img/footer-periscope.png' }
];
