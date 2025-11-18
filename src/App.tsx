import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio.tsx";
//@ts-ignore
import Contacto from "./Contacto.jsx";
//@ts-ignore
import Datos from "./Datos.jsx";

export default function App() {
  return (
    <div className="w-full max-w-3xl">
      <nav className="flex justify-center gap-6 mb-4">
        <Link
          to="/"
          className="text-lg font-semibold text-slate-400 hover:text-blue-400 transition-colors duration-300"
        >
          Inicio
        </Link>
        <Link
          to="/contacto"
          className="text-lg font-semibold text-slate-400 hover:text-blue-400 transition-colors duration-300"
        >
          Contacto
        </Link>
        <Link
          to="/datos"
          className="text-lg font-semibold text-slate-400 hover:text-blue-400 transition-colors duration-300"
        >
          Mis Gustos
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/datos" element={<Datos />} />
      </Routes>
    </div>
  );
}

