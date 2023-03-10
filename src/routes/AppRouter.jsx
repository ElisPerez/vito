import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LenguajesProgramacion from "../pages/LenguajesProgramacion";

/* import Footer from "../Components/Footer"; */
/* import Header from "../Components/Header";
import Contacto from "../pages/Contacto";
import Cursos from "../pages/Cursos";
import Home from "../pages/Home";
import Proyectos from "../pages/Proyectos"; */

const Header = lazy(() => import("../components/Header"));
const Contacto = lazy(() => import("../pages/Contacto"));
const Cursos = lazy(() => import("../pages/Cursos"));
const Home = lazy(() => import("../pages/Home"));
const Proyectos = lazy(() => import("../pages/Proyectos"));
const Footer = lazy(() => import("../components/Footer"));
const CursoScreen = lazy(() => import("../pages/CursoScreen"));

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <Routes>
        <Route end path="/home" element={<Home />} />
        <Route end path="/contactos" element={<Contacto />} />
        <Route end path="/skills" element={<LenguajesProgramacion />} />
        <Route end path="/proyectos" element={<Proyectos />} />
        <Route end path="/cursos" element={<Cursos />} />
        <Route end path="/Estudios/:id" element={<CursoScreen />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default AppRouter;
