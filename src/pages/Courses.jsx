import { useState, useEffect } from 'react';
import { coursesData } from '../data/courses';
import CourseCard from '../components/CourseCard';
import useLocalStorage from '../hooks/useLocalStorage';
import './Pages.css';

function Courses() {
  const [courses, setCourses] = useState(coursesData);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    console.log('Курсы загружены, количество:', courses.length);
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const toggleFavorite = (courseId) => {
    setFavorites(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <main className="courses-page">
      <h1>Наши курсы</h1>
      
      <div className="courses-controls">
        <input
          type="text"
          placeholder="Поиск курсов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="all">Все курсы</option>
          <option value="in-progress">В процессе</option>
          <option value="not-started">Не начинал</option>
        </select>
      </div>

      <p className="results-count">Найдено курсов: {filteredCourses.length}</p>

      <div className="courses-grid">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            isFavorite={favorites.includes(course.id)}
            onToggleFavorite={() => toggleFavorite(course.id)}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="no-results">
          <p>😞 Курсы не найдены. Попробуйте изменить параметры поиска.</p>
        </div>
      )}
    </main>
  );
}

export default Courses;