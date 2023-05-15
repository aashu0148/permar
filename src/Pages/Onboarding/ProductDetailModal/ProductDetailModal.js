import React, { useState } from "react";

import Modal from "Components/Modal/Modal";
import TextArea from "Components/Textarea/Textarea";

import styles from "./ProductDetailModal.module.scss";

function ProductDetailModal({ onClose, onSubmit }) {
  const [values, setValues] = useState({
    description: "",
    audience: "",
  });
  const [errors, setErrors] = useState({
    description: "",
    audience: "",
  });

  const validateForm = () => {
    let errors = {};

    if (!values.description) errors.description = "Enter description";
    if (!values.audience) errors.audience = "Enter target audience";

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
        <p className={styles.heading}>Tell us about your product</p>

        <TextArea
          label="Product description"
          hintText="This is some hint for what you type"
          placeholder="Type here..."
          value={values.description}
          onChange={(event) => {
            setErrors((prev) => ({ ...prev, description: "" }));
            setValues((prev) => ({ ...prev, description: event.target.value }));
          }}
          error={errors.description}
        />
        <TextArea
          label="Target audience"
          hintText="This is some hint for what you type"
          placeholder="Type here..."
          value={values.audience}
          onChange={(event) => {
            setErrors((prev) => ({ ...prev, audience: "" }));
            setValues((prev) => ({ ...prev, audience: event.target.value }));
          }}
          error={errors.audience}
        />

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

export default ProductDetailModal;
