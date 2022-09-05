import React from "react";
import "./services.css";
import Card from "../card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from "framer-motion";
import { spring } from "popmotion";
import { themeContext } from "../../Context";
import { useContext } from "react";
//import Resume from "./resume.pdf";

const Services = () => {
  const transition = { duration: 1, type: spring };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="services" id="Services">
        <div className="awesome">
          <span>My Awesome</span>
          <span>services</span>
          <span>
            lorem ispum is simply dummy text of printing of printing lorem
            <br />
            ispum is simply dummy text of printing
          </span>
          {/* <a herf={Resume} download> */}
          <button className="button s-button">Download CV</button>
          {/* </a> */}
        </div>
        <div className="cards">
          <motion.div
            whileInView={{ left: "25%" }}
            initial={{ left: "25%" }}
            transition={transition}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma Sketch Photoshop Adobe Adobe xd"}
            />
          </motion.div>
        </div>
      </div>
      <div className="cards1">
        <Card
          emoji={Glasses}
          heading={"Developer"}
          detail={"Html, Css, JavaScript, React"}
        />
      </div>

      <div className="cards2">
        <Card
          emoji={Humble}
          heading={"Developer"}
          detail={"Html, Css, JavaScript, React"}
        />
      </div>
    </>
  );
};

export default Services;
