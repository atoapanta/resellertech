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
      <div className="container-fluid vh-100">
        <div className="h-25 opacity-50 bg-danger">f</div>
        <div className="col d-flex h-25 bg-primary">
          <div className="col-6 bg-dark opacity-50">
            <p className="text-white m-0">Contenido A</p>
          </div>
          <div className="col-6 bg-success opacity-50">
            <p className="text-white m-0">Contenido B</p>
          </div>
        </div>
        <div className="col h-50 ">
          <div className="col h-25 d-flex flex-column align-items-center ">
            <h2>Libere el potencial de su negocio con un sitio web rápido</h2>
            <span>
              ¡Déjanos ayudarte a llevar tu presencia en línea al siguiente
              nivel!
            </span>
          </div>
          <div className="col h-75 d-flex ">
            <div className="col-4 text-center p-3">
              <img
                src="https://www.svgrepo.com/show/374162/vcxproj.svg"
                alt="Bootstrap"
                width="100"
                height="100"
              />
              <hr />
              <h5>Características Principales</h5>
              <small>
                <ul className="list-unstyled features-list">
                  <li>Desarrollo Ultimate</li>
                  <li>Diseño Responsivo</li>
                  <li>Optimización de rendimiento</li>
                  <li>Integración de API</li>
                  <li>Soporte post-lanzamiento</li>
                </ul>
              </small>
            </div>
            <div className="col-4 text-center p-3">
              <img
                src="https://svgsilh.com/svg/2099120.svg"
                alt="Bootstrap"
                width="100"
                height="100"
              />
              <hr />
              <h5>CMS Ventas</h5>
              <small>
                Desarrollamos sistemas de gestión de contenido (CMS)
                especializados en ventas. Simplifica la administración de
                productos, pedidos y clientes para potenciar tu negocio en
                línea.
              </small>
            </div>
            <div className="col-4 text-center p-3">
              <img
                src="https://www.svgrepo.com/show/303253/wechat-3-logo.svg"
                alt="Bootstrap"
                width="100"
                height="100"
              />
              <hr />
              <h5>Chatbot IA</h5>
              <small>
                Implementamos chatbots inteligentes para mejorar la interacción
                con tus clientes. Ofrecemos soluciones personalizadas que se
                integran perfectamente en tu sitio web.
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* <p className="m-0">
          </p>
          <p className="m-0">Contáctanos para obtener más información.</p> */}

      {/* <section className="my-5 content-section">
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

              {/* <h2 className="section-title">¿Qué ofrecemos?</h2>
              <p className="section-text">
                Nuestro equipo de desarrolladores expertos en React.js está
                listo para crear la página web perfecta para tu negocio.
                Ofrecemos soluciones personalizadas y modernas que se adaptan a
                tus necesidades.
              </p> 
            </div>
          </div>
        </section> */}
      {/* <section className="my-5 text-center content-section">
          <h2 className="section-title"></h2>
          
        </section> */}

      {/* <section className="text-center my-5 content-section">
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
        </section> */}
      <Footer />
    </>
  );
};

export default App;
