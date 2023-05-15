import React, { useState } from "react";

import Modal from "Components/Modal/Modal";

import styles from "./ReviewModal.module.scss";
import TextArea from "Components/Textarea/Textarea";

function ReviewModal({ onClose, onSubmit }) {
  const [values, setValues] = useState({
    heading: "this is some default text we have from backend",
    content: "Same here dude :) ",
  });
  const [errors, setErrors] = useState({
    heading: "",
    content: "",
  });

  const validateForm = () => {
    let errors = {};

    if (!values.heading) errors.heading = "Enter heading";
    if (!values.content) errors.content = "Enter some content";

    if (Object.keys(errors).length) {
      setErrors(errors);
      return false;
    } else {
      setErrors({});
      return true;
    }
  };

  const handleSubmission = () => {
    if (!validateForm()) return;

    if (onSubmit) onSubmit(values);
    if (onClose) onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <p className={styles.heading}>Review page contents</p>

        <TextArea
          label="Product heading"
          hintText="This is some hint for what you type"
          placeholder="Type here..."
          value={values.heading}
          onChange={(event) => {
            setErrors((prev) => ({ ...prev, heading: "" }));
            setValues((prev) => ({ ...prev, heading: event.target.value }));
          }}
          error={errors.heading}
        />
        <TextArea
          label="Content"
          hintText="This is some hint for what you type"
          placeholder="Type here..."
          value={values.content}
          onChange={(event) => {
            setErrors((prev) => ({ ...prev, content: "" }));
            setValues((prev) => ({ ...prev, content: event.target.value }));
          }}
          error={errors.content}
        />

        <div className={styles.footer}>
          <button
            className="button close-btn"
            onClick={() => (onClose ? onClose() : "")}
          >
            Close
          </button>
          <button className="button" onClick={handleSubmission}>
            Deploy
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ReviewModal;
