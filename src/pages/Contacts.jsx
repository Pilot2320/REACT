import { useState, useEffect } from 'react';
import './Pages.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email обязателен для заполнения';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный email адрес';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно для заполнения';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Форма отправлена:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <main className="contacts-page">
      <h1>Контакты</h1>
      
      <div className="contacts-container">
        <div className="contact-info">
          <h2>📞 Свяжитесь с нами</h2>
          <p>Звоните в рабочие дни с 9:00 до 18:00</p>
          <p className="phone">+7 (999) 123-45-67</p>
          
          <h3>📍 Адрес</h3>
          <p>Москва, ул. Театральная, д. 5</p>
          <p>Метро: Театральная (5 минут пешком)</p>
          
          <h3>🕐 Время работы</h3>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб-Вс: Выходной</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h2>📝 Форма обратной связи</h2>
          
          <div className="form-group">
            <label htmlFor="name">Имя *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 999-99-99"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Введите ваше сообщение..."
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            disabled={!isFormValid}
            className={`submit-button ${!isFormValid ? 'disabled' : ''}`}
          >
            Отправить сообщение
          </button>

          {submitted && (
            <div className="success-message">
              ✅ Ваше сообщение успешно отправлено! Мы ответим вам в ближайшее время.
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

export default Contacts;