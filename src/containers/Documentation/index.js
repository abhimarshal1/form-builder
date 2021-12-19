import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";

// Styled
import { StyledContainer } from "./styled";

const sample = {
  title: "Sample Form",
  subTitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum quidem, at voluptates in commodi eum numquam placeat sapiente incidunt",
  items: [
    {
      key: "username",
      type: "string",
      label: "Username",
      placeholder: "Enter username",
      required: true,
    },
    {
      key: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter Password",
      required: true,
    },
    {
      key: "dob",
      type: "date",
      label: "DOB",
      required: true,
    },
  ],
};

const Documentation = (props) => {
  useEffect(() => {
    document.getElementById("json").innerHTML = JSON.stringify(
      sample,
      undefined,
      2
    );
  }, []);

  return (
    <StyledContainer {...props}>
      <Header as="h4">Documentation</Header>
      <Header as="h5" className="mt-0">
        Project Name :{" "}
        <span>
          <em>JSON Form Builder</em>
        </span>
      </Header>
      <Header as="h5" className="mt-0">
        Description :{" "}
        <span>
          JSON Form Builder is a json based config driven form builder. The
          underlying UI framework is <em>Semantic UI</em>. For All the other
          extra attributes that you can pass through in the form fields, you can
          refer official semanti ui documentation :{" "}
          <a href="https://react.semantic-ui.com/" target="_blank">
            Here
          </a>
        </span>
      </Header>
      <Header as="h5" className="mt-0">
        Sample Config :{" "}
      </Header>
      <pre id="json" />
      <Header as="h5" className="mt-2">
        Supported Form Items :{" "}
        <span>
          string, number, date, datetime, time, password, checkbox, dropdown,
          text and radio
        </span>
      </Header>
      <Header as="h5" className="mt-0">
        Author :{" "}
        <span>
          <em>Abhishek Kumar Upadhyay</em>
        </span>
      </Header>
    </StyledContainer>
  );
};

export default Documentation;
