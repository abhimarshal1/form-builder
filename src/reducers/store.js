export const initialState = {
  schema: `{
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
     {
       "key": "age",
       "type": "number",
       "label": "Age",
       "placeholder": "Enter Age"
     },
     {
       "key": "country",
       "type": "dropdown",
       "label": "Country",
       "placeholder": "Select Country",
       "options":[
         {
           "key" : "in",
           "text" : "INDIA",
           "value" : "INDIA"
         },
         {
           "key" : "usa",
           "text" : "United States",
           "value" : "USA"
         },
         {
           "key" : "uk",
           "text" : "United Kingdom",
           "value" : "UK"
         }
       ]
     }
    ]
  }`,
};

export const storeReducer = (_, action) => {
  switch (action.type) {
    case "UPDATE_SCHEMA":
      return { schema: action.payload };
    case "RESET_SCHEMA":
      return initialState;
    default:
  }
};
