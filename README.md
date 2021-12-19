# JSON Form Builder

The repo contains the source code for the json form builder. This is a playground around the POC.

## Description
JSON Form Builder is a json based config driven form builder. The underlying UI framework is <em>Semantic UI</em>. For All the other extra attributes that you can pass through in the form fields, you can refer official semanti ui documentation : [HERE](https://react.semantic-ui.com/)

## Live Playground

https://json-form-builder-abhishek.netlify.app/

## Tech Stack

**Client:** React, Styled-Components, Semantic-UI-React

## Sample Config
```json
{
    "title": "Sample Form",
    "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum quidem, at voluptates in commodi eum numquam placeat sapiente incidunt",
    "items":[
      {
        "key": "username",
        "type": "string",
        "label": "Username",
        "placeholder": "Enter username",
        "required":true
      },
      {
       "key": "password",
       "type": "password",
       "label": "Password",
       "placeholder": "Enter Password",
       "required":true
     },
     {
      "key": "dob",
      "type": "date",
      "label": "DOB",
      "required":true
     },
    ]
}
```
## Supported Form Fields:
string, number, date, datetime, time, password, checkbox, dropdown, text and radio

## Run Locally

Clone the project

```bash
 git clone git@github.com:abhimarshal1/form-builder.git
```

Go to the project directory

```bash
 cd form-builder
```

Install dependencies

```bash
 npm install
```

Start the server

```bash
 npm run dev
```
## Author

- [Abhishek Kumar Upadhyay](https://www.abhishekupadhyay.net)