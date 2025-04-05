import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, studies } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import React, { useState } from "react";
import Tooltip from "../components/Tooltip";

const About = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleMouseEnter = (index) => setActiveTooltip(index);
  const handleMouseLeave = () => setActiveTooltip(null);

  const startDate = new Date(2020, 7);
  const now = new Date();
  const diffYears = (now - startDate) / (1000 * 60 * 60 * 24 * 365.25);
  const experience = diffYears.toFixed(1);

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hola, Soy{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Juan Gómez
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col lg:flex-row items-center gap-6 text-slate-500">
        <img
          src="/assets/images/me.jpg"
          alt="Foto de perfil"
          className="w-40 h-60 object-cover rounded-lg mt-2 lg:mt-0 lg:order-2"
        />
        <p className="flex-1 text-justify">
          Soy desarrollador de software con {experience} años de experiencia. Me caracteriza la disciplina, la adaptabilidad y una fuerte pasión por el aprendizaje continuo. He trabajado en diversos proyectos que me han exigido incorporar nuevas tecnologías, lenguajes y herramientas, lo que me ha permitido aportar valor, crecer profesionalmente y responder con eficacia a los cambios del entorno.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Habilidades</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div
              className="block-container w-20 h-20"
              key={skill.name}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                {activeTooltip === index && (<Tooltip content={<div style={{ fontSize: "13px", margin: "10px" }}>{skill.name}</div>} />)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experiencia</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p> 
            Mi trayectoria profesional ha sido enriquecedora, he tenido la oportunidad de colaborar con tres tipos distintos de empresas y multiples proyectos. Cada una de ellas ha jugado un papel crucial en mi evolución, permitiéndome ampliar mis habilidades técnicas y fortalecer mis relaciones con colegas altamente capacitados. Este recorrido me ha dotado de una comprensión profunda del sector, así como de la importancia de adaptarse y crecer dentro de diferentes entornos empresariales.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-slate-500 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Estudios</h3>

        <div className="items-center mt-16 flex flex-wrap gap-12">
          {studies.map((studies, index) => (
            <div key={index} className="block-container-ex">
              <div className="btn-back rounded-2xl h-[325px] w-64 bg-gray-400"></div>
              <div className="h-[325px] w-64 space-y-6 rounded-2xl bg-gradient-to-r from-[#D6EAF8] to-[#AED6F1] transition duration-300 hover:-rotate-2">
                <img
                  src={studies.img}
                  alt="Imagen de certificado"
                  className="rounded-2xl h-44 w-64"
                />

                <div className="px-5">
                  <p className="text-center text-5xs font-extrabold text-gray-900 hover:text-[#0072ff] cursor-pointer">
                    <a
                      href={`${studies.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {studies.name}
                    </a>
                  </p>

                  <p className="text-center text-xs font-extrabold text-gray-600">
                    {studies.date}
                  </p>
                  <p className="text-center text-4xs font-extrabold text-gray-600">
                    {studies.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
