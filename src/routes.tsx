import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';
import About from 'pages/About';
import TechStack from 'pages/TechStack';
import Projects from 'pages/Projects';
import Contact from 'pages/Contact';
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tech" element={<TechStack />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;
