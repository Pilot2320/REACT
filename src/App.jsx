import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // Определяем базовый путь в зависимости от окружения
  const basePath = import.meta.env.MODE === 'production' 
    ? '/my-courses-app'  // ← ЗАМЕНИТЕ на имя вашего репозитория!
    : '/';

  return (
    <Router basename={basePath}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;