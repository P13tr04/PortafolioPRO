import React from 'react';

export default function Gracias() {
  return (
    <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700 text-center mx-auto mt-8">
      <h1 className="text-3xl font-bold text-white mb-6">¡Mensaje Enviado Exitosamente!</h1>
      <p className="text-slate-300 mb-6">
        Gracias por contactarme. Te he enviado una confirmación por email y me pondré en contacto contigo pronto.
      </p>
      <a 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Volver al Inicio
      </a>
    </div>
  );
}
