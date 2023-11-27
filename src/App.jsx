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
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
    <Footer />
      </Router>
    </>
  );
};

export default App;
