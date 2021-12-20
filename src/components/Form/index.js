import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form as SemanticForm, Button } from 'semantic-ui-react';

// Helpers
import { getComponent } from 'helpers/components';

const randomID = 'form-mduPSC58tn';
let initialFormValue;

export var Form = function ({ onSubmit, items, ...props }) {
  const [formData, setFormData] = useState(() => {
    const initialValue = items.reduce(
      (acc, { key }) => ({ ...acc, [key]: '' }),
      {},
    );
    initialFormValue = initialValue;
    return initialValue;
  });

  const handleChange = (e, { name, value }) => {
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
          key,
          name: key,
          onChange: handleChange,
        };

        if (!['date', 'datetime'].includes(type)) {
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default Form;
