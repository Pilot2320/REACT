import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './CourseCard.css';

function CourseCard({ course, isFavorite, onToggleFavorite }) {
  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={course.image} alt={course.title} />
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
          aria-label="Добавить в избранное"
        >
          ❤️
        </button>
      </div>
      
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-teacher">👨‍🏫 {course.teacher}</p>
        <p className="course-card-description">{course.description}</p>
        
        <div className="course-card-progress">
          <ProgressBar 
            progress={course.progress} 
            height={8}
            color="#4CAF50"
          />
        </div>
        
        <Link to={`/course/${course.id}`} className="course-link-button">
          Подробнее →
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;