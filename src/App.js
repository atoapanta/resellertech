// App.js
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FrontPng from "./assets/frontend_graphic.png";

import Typewriter from "typewriter-effect";

const App = () => {
  return (
    <>
      <Header />
      <div className="landing-page container">
        <header className="text-center mt-5"></header>
        <section className="my-5 content-section">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={FrontPng}
                alt="AmbatoTech"
                className="img-fluid rounded shadow image"
              />
            </div>
            <div className="col-md-6 text-md-start">
              <div
                className="col text-center text-white"
                style={{ fontFamily: "Titan One" }}
              >
                <h1>
                  <Typewriter
                    options={{
                      strings: "AmbatoTech",
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className="lead subtitle">
                  Construyendo experiencias web increíbles para tu negocio
                </p>
              </div>

              <h2 className="section-title">¿Qué ofrecemos?</h2>
              <p className="section-text">
                Nuestro equipo de desarrolladores expertos en React.js está
                listo para crear la página web perfecta para tu negocio.
                Ofrecemos soluciones personalizadas y modernas que se adaptan a
                tus necesidades.
              </p>
            </div>
          </div>
        </section>
        <section className="my-5 text-center content-section">
          <h2 className="section-title">Características Principales</h2>
          <ul className="list-unstyled features-list">
            <li>Desarrollo en React.js</li>
            <li>Diseño Responsivo</li>
            <li>Optimización de rendimiento</li>
            <li>Integración de API</li>
            <li>Soporte post-lanzamiento</li>
          </ul>
        </section>
        <section className="my-5 text-center content-section">
          <h2 className="section-title">Creación de Chatbot</h2>
          <p className="section-text">
            Implementamos chatbots inteligentes para mejorar la interacción con
            tus clientes. Ofrecemos soluciones personalizadas que se integran
            perfectamente en tu sitio web.
          </p>
        </section>
        <section className="my-5 text-center content-section">
          <h2 className="section-title">CMS para Ventas</h2>
          <p className="section-text">
            Desarrollamos sistemas de gestión de contenido (CMS) especializados
            en ventas. Simplifica la administración de productos, pedidos y
            clientes para potenciar tu negocio en línea.
          </p>
        </section>
        <section className="text-center my-5 content-section">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-text">
            ¡Déjanos ayudarte a llevar tu presencia en línea al siguiente nivel!
            Contáctanos para obtener más información.
          </p>
          <a
            href="https://www.ejemplo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-btn"
          >
            Contactar
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
