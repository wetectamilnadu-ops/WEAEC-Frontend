import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import EventsGallery from './components/EventsGallery';
import NewsSlider from './components/NewsSlider';
import Pricing from './components/Pricing';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import PopupInquiry from './components/PopupInquiry';
import GalleryNewsPage from './pages/GalleryNewsPage';
import GalleryPage from './pages/GalleryPage';

const HomePage = () => (
  <main className="flex-grow">
    <Hero />
    <EventsGallery />
    <Sections />
    <NewsSlider />
    <Pricing />
    <InquiryForm />
  </main>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <PopupInquiry />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<GalleryNewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
