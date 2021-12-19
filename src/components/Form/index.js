import React, { useState, useEffect } from "react";
import { Form as SemanticForm, Button } from "semantic-ui-react";

// Helpers
import { getComponent } from "helpers/components";

// Utils
import { getRandomString } from "utils/common";

const randomID = `form-${getRandomString()}`;
let initialFormValue;

const Form = ({ onSubmit, items, ...props }) => {
  const [formData, setFormData] = useState(() => {
    const initialValue = items.reduce(
      (acc, { key }) => ({ ...acc, [key]: "" }),
      {}
    );
    initialFormValue = initialValue;
    return initialValue;
  });

  const handleChange = (e, { name, type, value }) => {
    e.stopPropagation();
    e.persist();

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
    setFormData(initialFormValue);
    document.getElementById(randomID).reset();
  };

  return (
    <SemanticForm id={randomID} onSubmit={handleSubmit} {...props}>
      {items.map(({ key, type, ...details }) => {
        const compFunc = getComponent(type);

        if (!compFunc) {
          return null;
        }

        const properties = {
          ...details,
          key: key,
          name: key,
          onChange: handleChange,
        };

        if (!["date", "datetime"].includes(type)) {
          properties.value = formData[key];
        }

        return compFunc(properties);
      })}
      <Button type="submit" primary>
        SUBMIT
      </Button>
    </SemanticForm>
  );
};

export default Form;
