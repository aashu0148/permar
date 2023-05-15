import React, { useState } from "react";

import robotImage from "assets/images/robot.png";
import formGirlImage from "assets/images/formGirl.png";
import reviewRobotImage from "assets/images/reviewRobot.png";

import styles from "./Onboarding.module.scss";

function Onboarding() {
  const [values, setValues] = useState({
    template: {
      filled: false,
    },
    product: {
      filled: false,
    },
    review: {
      filled: false,
    },
  });
  const [openModals, setOpenModals] = useState({
    template: false,
    product: false,
    review: false,
  });

  const onboardingCards = [
    {
      value: "template",
      title: "Choose template",
      description: "Choose from a range of possible landing page templates",
      buttonText: "Choose Template",
      image: robotImage,
      buttonClickHandler: () =>
        setOpenModals({
          template: true,
          product: false,
          review: false,
        }),
      disabled: false,
    },
    {
      value: "product",
      title: "Your Product",
      description: "Tell us what your product is and your target audience",
      buttonText: "Enter description",
      image: formGirlImage,
      buttonClickHandler: () =>
        setOpenModals({
          template: true,
          product: false,
          review: false,
        }),
      disabled: !values.template.filled,
    },
    {
      value: "review",
      title: "Review and Deploy",
      description: "Choose from a range of possible landing page templates",
      buttonText: "Generate Landing Page",
      image: reviewRobotImage,
      buttonClickHandler: () =>
        setOpenModals({
          template: true,
          product: false,
          review: false,
        }),
      disabled: !values.product.filled,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Onboarding</p>
        <p className={styles.description}>
          Welcome to Permar, Create optimized Landing Pages. In Seconds.
        </p>
      </div>

      <div className={styles.cards}>
        {onboardingCards.map((item, index) => (
          <div className={styles.card} key={item.value}>
            <div className={styles.image}>
              <img src={item.image} alt={item.title} />
            </div>

            <p className={styles.title}>
              {index + 1}
              {". "} {item.title}
            </p>
            <p className={styles.desc}>{item.description}</p>

            <button
              className="button"
              onClick={() =>
                item.buttonClickHandler ? item.buttonClickHandler() : ""
              }
              disabled={item.disabled}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Onboarding;
