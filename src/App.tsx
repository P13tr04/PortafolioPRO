import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
//@ts-ignore
import Contacto from "./Contacto.jsx";
//@ts-ignore
import Gracias from "./Gracias";

export default function App() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <nav className="flex justify-center gap-6 mb-8">
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
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </div>
  );
}
