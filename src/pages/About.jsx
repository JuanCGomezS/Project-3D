import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import React, { useState } from "react";
import Tooltip from "../components/Tooltip";

const About = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveTooltip(index);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hola, Soy{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Juan Carlos Gomez
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Como desarrollador de software, mi integridad, disciplina y una
          mentalidad emprendedora se complementan con la gran capacidad para
          trabajar en equipo y el deseo de aprender y crecer cada día.
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
                {activeTooltip === index && <Tooltip content={skill.name} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experiencia</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            He trabajado con tres tipos de empresas, que han ayudado a mejorar
            mis habilidades y a relacionarme con personas inteligentes. Aquí
            presento el resumen:
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
        <h3 className="subhead-text">Habilidades</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          <div className="block-container-ex">
            <div class="btn-back rounded-2xl h-52 w-44 bg-gray-400"></div>
            <div class="h-52 w-44 rotate-6 space-y-6 rounded-2xl bg-green-200 p-6 transition duration-300 hover:rotate-0">
              <div class="flex justify-end">
                <div class="h-4 w-4 rounded-full bg-gray-900"></div>
              </div>

              <header class="text-center text-xs font-extrabold text-gray-600">
                2021.09.01
              </header>

              <div>
                <p class="text-center text-5xs font-extrabold text-gray-900">
                  Online Test (Physics)
                </p>
                <p class="text-center text-4xs font-extrabold text-[#FE5401]">
                  2 hours
                </p>
              </div>

              {/* <footer class="mb-10 flex justify-center">
          <button class="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
            <span>Start</span>
            <i class="fas fa-hand-peace text-xl"></i>
          </button>
        </footer> */}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
