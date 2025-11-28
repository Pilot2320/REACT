import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Добро пожаловать в Центр развития</h1>
          <p>Присоединяйтесь к тысячам людей, которые уже достигли своих целей благодаря нашим программам личностного роста</p>
          <Link to="/courses" className="hero-button">
            Выбрать курс
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Наши преимущества</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3>Индивидуальный подход</h3>
            <p>Программа адаптирована под ваши цели и особенности</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👨‍🏫</span>
            <h3>Опытные преподаватели</h3>
            <p>Преподаватели с международными сертификатами</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3>Комьюнити</h3>
            <p>Общение с людьми, стремящимися к развитию</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;