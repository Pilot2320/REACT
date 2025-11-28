import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import ProgressBar from '../components/ProgressBar';
import './Pages.css';

function CourseDetail() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <main className="page">
        <h1>⚠️ Курс не найден</h1>
        <p>Курс с ID {id} не существует в нашей базе.</p>
        <Link to="/courses" className="back-link">← Вернуться к курсам</Link>
      </main>
    );
  }

  return (
    <main className="course-detail-page">
      <Link to="/courses" className="back-link">← Вернуться к курсам</Link>
      
      <img src={course.image} alt={course.title} className="course-detail-image" />
      
      <h1>{course.title}</h1>
      <p className="course-teacher">👨‍🏫 Преподаватель: {course.teacher}</p>
      
      <div className="course-meta">
        <span className={`course-status ${course.status}`}>
          {course.status === 'in-progress' ? '📚 В процессе' : '🔒 Не начинал'}
        </span>
      </div>
      
      <section className="course-progress">
        <h2>Ваш прогресс</h2>
        <ProgressBar 
          progress={course.progress} 
          label="Завершено" 
          color="#2196F3"
          height={25}
        />
      </section>
      
      <section className="course-description">
        <h2>Описание курса</h2>
        <p>{course.fullDescription}</p>
      </section>
      
      <div className="course-actions">
        <button className="action-button primary">
          {course.status === 'in-progress' ? 'Продолжить обучение' : 'Начать обучение'}
        </button>
        <button className="action-button secondary">
          Загрузить сертификат
        </button>
      </div>
    </main>
  );
}

export default CourseDetail;