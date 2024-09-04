import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full stack React Developer</h3>
              <br />
              <p>
              I'm a Full Stack React Developer with 2 years of experience, 
              specializing in building responsive and user-centric web applications.
              </p>
              <p>
              My expertise spans frontend technologies like 
              React, JavaScript, and Tailwind, along with backend development.
              </p>
              <p>
              I’m passionate about creating seamless digital experiences that
              combine clean design with robust functionality.
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};
