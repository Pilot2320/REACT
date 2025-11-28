import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './Pages.css';

function Contacts() {
  const [formData, setFormData] = useLocalStorage('contactFormDraft', {
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [draftRestored, setDraftRestored] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};

      if (!formData.name.trim()) {
        newErrors.name = 'Имя обязательно для заполнения';
      } else if (formData.name.trim().length < 2) {
        newErrors.name = 'Имя должно содержать минимум 2 символа';
      }

      if (!formData.email) {
        newErrors.email = 'Email обязателен для заполнения';
      } else if (!validateEmail(formData.email)) {
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

    validateForm();
  }, [formData]);

  // Уведомление о восстановлении черновика
  useEffect(() => {
    const savedDraft = localStorage.getItem('contactFormDraft');
    const hasContent = formData.name || formData.email || formData.message;

    if (savedDraft && hasContent && !draftRestored) {
      setDraftRestored(true);
      setSuccessMessage('✅ Ваш черновик восстановлен из памяти браузера');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        console.log('Данные для отправки:', formData);

        setSuccessMessage('✅ Форма успешно отправлена!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        localStorage.removeItem('contactFormDraft');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        setSuccessMessage('❌ Ошибка при отправке: ' + error.message);
      }
    }
  };

  const clearDraft = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    localStorage.removeItem('contactFormDraft');
    setSuccessMessage('🗑️ Черновик очищен');
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <main className="page">
      <div className="contacts-page">
        <h1>Контакты</h1>

        <div className="contacts-container">
          {/* ЛЕВАЯ КОЛОНКА - ИНФОРМАЦИЯ О КОМПАНИИ */}
          <div className="contact-info">
            <h2>📞 Свяжитесь с нами</h2>
            <p>Звоните в рабочие дни с 9:00 до 18:00</p>
            <p className="phone">+7 (999) 123-45-67</p>

            <h3>📍 Адрес</h3>
            <p>Москва, ул. Театральная, д. 5</p>
            <p>Метро: Театральная (5 минут пешком)</p>

            <h3>⏰ Время работы</h3>
            <p>Пн-Пт: 9:00 - 18:00</p>
            <p>Сб-Вс: Выходной</p>
          </div>

          {/* ПРАВАЯ КОЛОНКА - ФОРМА */}
          <div className="contact-form">
            <h2>📧 Форма обратной связи</h2>

            {successMessage && (
              <div className="success-message">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* ИМЯ */}
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
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              {/* EMAIL */}
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
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              {/* ТЕЛЕФОН */}
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

              {/* СООБЩЕНИЕ */}
              <div className="form-group">
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Введите ваше сообщение..."
                  rows="5"
                  className={errors.message ? 'input-error' : ''}
                />
                <small style={{ color: '#999' }}>
                  {formData.message.length} символов
                </small>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              {/* КНОПКИ */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={!isFormValid}
                >
                  Отправить сообщение
                </button>
                <button
                  type="button"
                  onClick={clearDraft}
                  style={{
                    padding: '12px 20px',
                    background: '#f5f5f5',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Очистить черновик
                </button>
              </div>

              {/* ИНФО О АВТОСОХРАНЕНИИ */}
              <div className="form-info" style={{ marginTop: '15px' }}>
                <small>
                  Ваша форма автоматически сохраняется в реальном времени.
                  При случайном закрытии вкладки вы сможете восстановить черновик.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
