import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '40px' }}><h1>404 - Страница не найдена</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;