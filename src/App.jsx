import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./Views/Dashboard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tentang from "./Views/Tentang";
import Layanan from "./Component/Dashboard/Layanan";
import PilihFakultas from "./Views/PilihFakultas";
import FasilitasFilkom from "./Views/FasilitasFilkom";
import ClassF from "./Views/ClassF";
import Berita from "./Views/Berita";
import BeritaLengkap from "./Views/BeritaLengkap";
import Penerjemah from "./Views/Penerjemah";
import PenerjemahanHasil from "./Views/PenerjemahanHasil";
import Rute from "./Views/Rute";
import RuteHasil from "./Views/RuteHasil";
import Popup from "./Component/Dashboard/popup";
import NavFixed from "./NavFixed";
const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <NavFixed />
        <Popup />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/lengkap" element={<BeritaLengkap />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/layanan/fakultas" element={<PilihFakultas />} />
          <Route
            path="/layanan/fakultas/filkom"
            element={<FasilitasFilkom />}
          />
          <Route
            path="/layanan/fakultas/filkom/class-gedung-f"
            element={<ClassF />}
          />
          <Route path="/penerjemah" element={<Penerjemah />} />
          <Route path="/penerjemah/hasil" element={<PenerjemahanHasil />} />
          <Route path="/rute" element={<Rute />} />
          <Route path="/rute/hasil" element={<RuteHasil/> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
