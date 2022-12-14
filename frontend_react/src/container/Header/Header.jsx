import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1>Hamed Nasr</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <ul>
            <li>
              <h3 align="left">
                With a strong mathematical background, I am a creative and
                insightful deep learning and machine learning practitioner with
                experience in different projects and problems using TensorFlow,
                PyTorch, Scikit-learn, Pandas, etc.{" "}
              </h3>
            </li>
            <br />
            <li>
              <h3>Deep Learning and Machine Learning Engineer</h3>
            </li>
            <br />
            <li>
              <h3>Blockchain, Solidity and Smart Contract Developer</h3>
            </li>
            <br />
            <li>
              <h3>Data Analyst</h3>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.bitcoin, images.tensorflow, images.ethereum, images.python].map(
        (circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
