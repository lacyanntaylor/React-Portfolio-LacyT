import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation'; // Include Navigation
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation /> {/* Add Navigation here */}
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
