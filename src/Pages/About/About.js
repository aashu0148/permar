import React from "react";

import robotImage from "assets/images/robot.png";
import reviewRobotImage from "assets/images/reviewRobot.png";

import styles from "./About.module.scss";

function About() {
  const aboutCards = [
    {
      value: "card1",
      title: "Philosophy",
      description:
        "We believe that even small companies are capable of exponential growth... using the right tools. Here we aim to provide the tools for solo-preneurs to build the next Fortune500 companies",
      image: robotImage,
    },
    {
      value: "card2",
      title: "Strategy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: reviewRobotImage,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>About Permar</p>
        <p className={styles.description}>
          Permar AI automatically creates Landing Pages for you based on single
          prompts you are entering. You can create converting Landing Pages in
          Seconds without the need for developers.
        </p>
      </div>

      <div className={styles.aboutCards}>
        {aboutCards.map((item, index) => (
          <div
            className={`${styles.card} ${index % 2 == 0 ? "" : styles.reverse}`}
            key={item.value}
          >
            <div className={styles.details}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.desc}>{item.description}</p>

              <button className="button">Some action button</button>
            </div>

            <div className={styles.image}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
