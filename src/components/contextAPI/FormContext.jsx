import React, { createContext, useState } from "react";

const FormContext = createContext({});
export function FormProvider({ children }) {
  //track user input
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    option: ["seller", "buyer", "doctors"],
  });

  return (
    <FormContext.Provider
      value={{
        formDetails,
        setFormDetails,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
