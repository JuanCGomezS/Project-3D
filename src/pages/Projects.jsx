import { CTA } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Mis{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projectos
        </span>
      </h1>

      {projects.map((project) => (
        <div class="mx-auto py-10 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-poppins font-semibold">
              {project.name}
            </h4>
            <p className="mt-2 text-slate-500">{project.description}</p>
            <p className="mt-2 text-slate-900">
              Tecnologias: {project.tecnology}
            </p>

            <div className="flex flex-row my-3">
              {project.github && (
                <a
                  href={`${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.githubIcon}
                    alt="Imagen de certificado"
                    className="m-3 rounded-2xl h-7 w-7"
                  />
                </a>
              )}
              {project.download && (
                <a
                  href={`${project.download}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.downloadIcon}
                    alt="Imagen de certificado"
                    className="m-3 rounded-2xl h-7 w-7"
                  />
                </a>
              )}
              {project.website && (
                <a
                  href={`${project.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.websiteIcon}
                    alt="Imagen de certificado"
                    className="m-3 rounded-2xl h-7 w-7"
                  />
                </a>
              )}
            </div>
          </div>

          <div>
            <img
              class="opacity-90 rounded-lg shadow-lg"
              src={`${project.iconUrl}`}
              alt="Logo"
            />
          </div>
        </div>
      ))}

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
