import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import semua halaman yang baru kamu buat di folder pages
import Dashboard from './pages/Dashboard';
import Empathy from './pages/Empathy';
import Ideation from './pages/Ideation.jsx';
import Prototyping from './pages/Prototyping';
import Testing from './pages/Testing';
import Reflection from './pages/Reflection';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#020617]">
        {/* Navbar akan selalu muncul di setiap halaman */}
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/empathy" element={<Empathy />} />
            <Route path="/ideation" element={<Ideation />} />
            <Route path="/prototyping" element={<Prototyping />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/reflection" element={<Reflection />} />
          </Routes>
        </main>

        {/* Footer akan selalu muncul di setiap halaman */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;