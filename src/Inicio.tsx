import foto_img from "./foto.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  techStack: string;
}

function ProjectCard({ title, description, url, techStack }: ProjectCardProps) {
  return (
    <div className="bg-slate-700 rounded-lg shadow-lg p-6 border border-slate-600 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>

      <div className="mb-4">
        <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-800">
          Tecnologías: {techStack}
        </span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Ver en GitHub
      </a>
    </div>
  );
}

export default function Inicio() {
  const anioActual = new Date().getFullYear();

  const GITHUB_PERSONAL_URL = "https://github.com/P13tr04";
  const GITHUB_ORG_URL = "https://github.com/bufferring";
  const CARFIX_FRONTEND_URL = "https://github.com/bufferring/carfix-frontend";
  const AVATAR_URL = foto_img;

  const carfixProject = {
    title: "Carfix Frontend",
    description:
      "Aplicación web de gestión de talleres de reparación de automóviles. Participé en el desarrollo frontend, creando la interfaz de usuario mediante el uso de React y estilizado con Tailwind CSS.",
    url: CARFIX_FRONTEND_URL,
    techStack: "React, Tailwind CSS, JavaScript",
  };

  return (
    <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
      <header className="flex flex-col items-center gap-6 border-b border-slate-700 pb-6 mb-6 text-center">
        <img
          src={AVATAR_URL}
          alt="Avatar de P13tr04"
          className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">P13tr04</h1>
          <p className="mt-1 text-lg text-slate-400">
            Futuro Ingeniero de Sistemas | Frontend Developer
          </p>
        </div>
      </header>

      <main>
        <section>
          <h2 className="text-2xl font-bold text-blue-400 border-b-2 border-blue-400 inline-block pb-1 mb-4">
            Información Personal
          </h2>
          <ul className="space-y-3 text-slate-300 text-lg">
            <li>
              <span className="font-semibold text-white">Edad:</span> 21 años
            </li>
            <li>
              <span className="font-semibold text-white">Universidad:</span>{" "}
              UNEFA
            </li>
            <li>
              <span className="font-semibold text-white">Carrera:</span>{" "}
              Ingeniería de Sistemas
            </li>
            <li>
              <span className="font-semibold text-white">Rol:</span> Programador
              aprendiz enfocado en Frontend
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400 border-b-2 border-blue-400 inline-block pb-1 mb-4">
            Enlaces de GitHub
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={GITHUB_PERSONAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              P13tr04 (Personal)
            </a>
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-300"
            >
              BufferRing (Organización)
            </a>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400 border-b-2 border-blue-400 inline-block pb-1 mb-4">
            Mi Proyecto Destacado
          </h2>
          <ProjectCard
            title={carfixProject.title}
            description={carfixProject.description}
            url={carfixProject.url}
            techStack={carfixProject.techStack}
          />
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
