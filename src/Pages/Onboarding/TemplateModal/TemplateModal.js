import React, { useState } from "react";

import Modal from "Components/Modal/Modal";

import styles from "./TemplateModal.module.scss";

function TemplateModal({ onClose, onSubmit }) {
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const templates = [
    {
      value: "temp1",
      title: "Template 1",
      desc: "This is the description for template one. Create your new Landing Page in Seconds n\n\nDeveloping new Landing Pages is time consuming and expensive. With Permar you can now create Landing Pages with ",
      image:
        "https://cdn.dribbble.com/userupload/4685428/file/original-fbb26aae96ef30c3dc88b77ac5c326d7.png?compress=1&resize=1504x1128",
    },
    // {
    //   value: "temp2",
    //   title: "Template 2",
    //   desc: "This is the description for template two. Create your new Landing Page in Seconds n\n\nDeveloping new Landing Pages is time consuming and expensive. With Permar you can now create Landing Pages wit",
    //   image:
    //     "https://cdn.dribbble.com/userupload/5842869/file/original-52fb36f26fb5f6756721807afafeaf30.png?compress=1&resize=1504x1128",
    // },
    {
      value: "temp3",
      title: "Template 3",
      desc: "This is the description for template three. Create your new Landing Page in Seconds n\n\nDeveloping new Landing Pages is time consuming and expensive. With Permar you can now create Landing",
      image:
        "https://cdn.dribbble.com/userupload/3940651/file/original-bd55a092ed44a4628dabae0c53780226.png?compress=1&resize=1504x1128",
    },
    {
      value: "temp4",
      title: "Template 4",
      desc: "This is the description for template four. Create your new Landing Page in Seconds n\n\nDeveloping new Landing Pages is ",
      image:
        "https://cdn.dribbble.com/userupload/4060585/file/original-50196bd74b183260e276052e0204e14f.png?compress=1&resize=1504x1128",
    },
  ];

  const handleSubmission = () => {
    if (!selectedTemplate) return;

    const template = templates.find((item) => item.value == selectedTemplate);

    if (onSubmit) onSubmit(template);
    if (onClose) onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <p className={styles.heading}>Pick a website template</p>

        <div className={styles.cards}>
          {templates.map((item) => (
            <div
              className={`${styles.card} ${
                item.value == selectedTemplate ? styles.active : ""
              }`}
              key={item.value}
              onClick={() => setSelectedTemplate(item.value)}
            >
              <div className={styles.image}>
                <img src={item.image} alt={item.title} />
              </div>

              <p className={styles.title}>{item.title}</p>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button
            className="button close-btn"
            onClick={() => (onClose ? onClose() : "")}
          >
            Close
          </button>
          <button className="button" onClick={handleSubmission}>
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default TemplateModal;
