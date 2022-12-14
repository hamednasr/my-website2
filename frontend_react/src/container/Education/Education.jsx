import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Education.scss";

const Skills = () => {
  const [educations, setEducation] = useState([]);
  // const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';
    // const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setEducation(data);
    });

    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">Education</h2>

      <div className="app__skills-container">
        {/* <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div> */}
        <div className="app__skills-exp">
          {educations.map((education) => (
            <motion.div className="app__skills-exp-item" key={education.degree}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{education.degree}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {education.university.map((uni) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={uni.name}
                      key={uni.name}
                    >
                      <h4 className="bold-text2">{uni.name}</h4>
                      <p className="p-text1">{uni.course}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={uni.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {uni.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "education",
  "app__primarybg"
);
