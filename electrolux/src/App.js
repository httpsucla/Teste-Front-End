import bannerDesktop from './images/banner.png';
import bannerMobile from './images/banner-mobile.png'
import './App.css';
import Header from './components/Header';
import Shelf from './components/Shelf';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='container-banner'>
          <img src={bannerDesktop} className="banner-desktop" alt="Banner" />
          <img src={bannerMobile} className="banner-mobile" alt="Banner" />
        </div>
        <Shelf />
        <Footer />
    </div>
  );
}

export default App;
