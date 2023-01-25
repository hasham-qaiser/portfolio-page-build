import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="w-screen h-[65vh] 
    
    flex flex-col rounded-lg items-center sm:space-x-7 py-5 flex-shrink-0 sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        w-24 h-24 mb-2

        sm:w-32 sm:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover sm:object-center sm:mb-4"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div
        className="w-[80%] overflow-y-auto mt-2 sm:scrollbar-thin sm:scrollbar-track-transparent sm:scrollbar-thumb-[#FFE55C]/60
       px-0 md:px-10 sm:relative sm:w-[85%]"
      >
        <h4
          className="text-xl
        sm:text-4xl font-light"
        >
          {experience?.jobTitle}
        </h4>
        <p
          className="text-lg
        font-bold sm:text-2xl mt-1"
        >
          {experience?.company}
        </p>

        <ul
          className=" flex flex-col
        
        list-disc sm:space-y-4 pl-5 pr-7 text-lg sm:max-h-80 xl:max-h-[260px] "
        >
          {experience.points.map((point, i) => (
            <li key={i * Math.random() * 10}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
