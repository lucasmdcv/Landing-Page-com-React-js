// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à Nossa Landing Page</h1>
        <p>Descubra nossos produtos incríveis e aproveite ofertas exclusivas!</p>
        <a
          className="App-link"
          href="#"
        >
          Saiba Mais
        </a>
      </header>
      <section className="features">
        <h2>Nossos Recursos</h2>
        <div className="feature">
          <h3>Recurso 1</h3>
          <p>Descrição do recurso 1.</p>
        </div>
        <div className="feature">
          <h3>Recurso 2</h3>
          <p>Descrição do recurso 2.</p>
        </div>
        <div className="feature">
          <h3>Recurso 3</h3>
          <p>Descrição do recurso 3.</p>
        </div>
      </section>
      <footer className="App-footer">
        <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;