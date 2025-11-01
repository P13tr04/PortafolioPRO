import React from 'react';

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function Contacto() {
  const anioActual = new Date().getFullYear();

  const handleSubmit = (event) => {
    const emailInput = event.currentTarget.querySelector('#email');
    const emailValue = emailInput.value;

    if (!isValidEmail(emailValue)) {
      event.preventDefault();
    }
  };

  return (
    <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
      
      <main>
        <section>
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Formulario de Contacto
          </h1>
          
          <form 
            onSubmit={handleSubmit}
            action="https://formsubmit.co/tusaniccola@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portafolio" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Gracias por tu mensaje. Te responderé pronto." />
            <input type="hidden" name="_blacklist" value="spam, prueba, test" />
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                Tu Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-300 mb-2">
                Tu Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-slate-700 rounded-lg">
            <p className="text-slate-300 text-sm text-center flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Protegido por CAPTCHA para evitar spam
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center mt-8 pt-4 border-t border-slate-700">
        <p className="text-sm text-slate-500">
          &copy; {anioActual} - Desarrollado con ❤️ por P13tr04.
        </p>
      </footer>
    </div>
  );
}
