import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Branches from './components/Branches';
import PhotoGallery from './components/PhotoGallery';
// import Donations from './components/Donations';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Branches />
      <PhotoGallery />
      {/* <Donations /> */}
      <Events />
      <Footer />
    </div>
  );
}

export default App;