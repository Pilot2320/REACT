import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="brand-link">
            <h1>🚀 Центр развития</h1>
          </Link>
        </div>
        
        <nav className="header-nav">
          <ul className="nav-list">
            <li><Link to="/" className={`nav-link ${isActive('/')}`}>Главная</Link></li>
            <li><Link to="/courses" className={`nav-link ${isActive('/courses')}`}>Курсы</Link></li>
            <li><Link to="/contacts" className={`nav-link ${isActive('/contacts')}`}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;