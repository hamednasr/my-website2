import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Publications.scss";

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "publications"] | order(_updatedAt desc)';

    client.fetch(query).then((data) => {
      setPublications(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Publications</h2>

      {/* <div className="app__skills-container"> */}
      {publications.map((publication) => (
        <motion.div className="app__skills-exp-item">
          <div>
            <p>
              <span className="p-text2">{publication.authors}</span>
              <span className="p-text2">{publication.title}</span>
              <span className="p-text3">{publication.journal}</span>
            </p>
          </div>
        </motion.div>
      ))}
      {/* </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Publications, "app__skills"),
  "publications",
  "app__whitebg"
);
