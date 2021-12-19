import React from "react";
import { Header, Divider } from "semantic-ui-react";

// Components
import Form from "components/Form";

// Styled
import { StyledFormContainer } from "./styled";

const FormContainer = ({ schema }) => {
  const { title, subTitle, items } = JSON.parse(schema);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledFormContainer className="form-container">
      {title && (
        <Header as="h3" className="mb-1">
          {title}
        </Header>
      )}
      {subTitle && <p className="sub-title mb-1 mt-0">{subTitle}</p>}
      {(title || subTitle) && <Divider />}
      <Form onSubmit={onSubmit} items={items} />
    </StyledFormContainer>
  );
};

export default FormContainer;
