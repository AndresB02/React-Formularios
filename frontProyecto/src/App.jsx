import "./App.css";
import "./styles.css";
import React from "react";
import CompMostrarProgramas from "./Componentes/CompMostrarProgramas";
import CompMostrarClientes from "./Componentes/CompMostrarClientes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompCrearProgramas from "./Componentes/CompCrearProgramas";
import CompCrearClientes from "./Componentes/CompCrearClientes";
import CompEditarProgramas from "./Componentes/CompEditarProgramas";
import CompEditarClientes from "./Componentes/CompEditarCliente";
//import CompLogin from "./Componentes/CompLogin";
import CompFooter from "./Componentes/CompFooter";

function App() {
  return (
    <>
      <div>
        <header>
          <nav
            id="navbar"
            className="navbar navbar-expand-lg navbar navbar-dark bg-dark"
          >
            <div className="navDos">
              <a className="navbar-brand rea" href="/login">
                React Hooks-Form
              </a>

              <button
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbarNav"
                data-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navUl">
                <li className="nav-item active">
                  <a className="nav-link" href="/login">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/clientes">
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/programas">
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signUp">
                    SignUp
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <BrowserRouter>
          <Routes>
            <Route
              path="/programas/"
              exact
              element={<CompMostrarProgramas />}
            />
            <Route path="/clientes/" exact element={<CompMostrarClientes />} />
            <Route
              path="/programas/agregar/"
              element={<CompCrearProgramas />}
            />
            <Route path="/clientes/agregar/" element={<CompCrearClientes />} />
            <Route
              path="/programas/editar/:id"
              element={<CompEditarProgramas />}
            />
            <Route
              path="/clientes/editar/:id"
              element={<CompEditarClientes />}
            />
          </Routes>
        </BrowserRouter>
        <CompFooter />
      </div>
    </>
  );
}

export default App;
