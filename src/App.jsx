import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Halaman Utama
import Dashboard from './pages/Dashboard';

// Import Halaman SDG (Contoh beberapa, silakan buat filenya di folder pages)
import Education from './pages/Education'; 
import Hunger from './pages/Hunger';
import Health from './pages/Health';

import Empathy from "./pages/Empathy";
import Ideation from './pages/Ideation';
import Prototyping from './pages/Prototyping';
import Starburst from './pages/Starburst';
import LeanCanvas from './pages/LeanCanvas';
import Testing from './pages/Testing';
import Reflection from './pages/Reflection';
// ... import lainnya sampai 17 file jika ingin dipisah satu-satu

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Tips: Karena Dashboard kamu pakai background putih, 
        pastikan bg-[#020617] (hitam) ini memang warna yang kamu mau 
        atau ganti ke bg-white jika ingin senada dengan Dashboard 
      */}
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Route Utama */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Route SDG sesuai path di sdgData */}
            <Route path="/education" element={<Education />} />
            <Route path="/hunger" element={<Hunger />} />
            <Route path="/health" element={<Health />} />
            
            {/* Route Tambahan dari code kamu sebelumnya */}
            <Route path="/empathy" element={<Empathy />} />
            <Route path="/ideation" element={<Ideation />} />
            <Route path="/prototyping" element={<Prototyping />} />
            <Route path="/starburst" element={<Starburst />} />
            <Route path="/leancanvas" element={<LeanCanvas />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/reflection" element={<Reflection />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;