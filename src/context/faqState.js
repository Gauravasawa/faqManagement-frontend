import React, { useState } from "react";
import faqContext from "./faqContext";

const FaqState = (props) => {
  const host = "http://localhost:5000";
  const [intialState, setIntialState] = useState([]);

  //Get all faq
  const getfaq = async () => {
    const response = await fetch(`${host}/api/faq/fetchallfaq`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    console.log(result);
    setIntialState(result);
  };

  //Add all faq
  const addfaq = async (question,answer) => {
    const response = await fetch(`${host}/api/faq/addfaq`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("token"),
      },
      body: JSON.stringify({question,answer})
    });
    const result = await response.json();
    console.log(result);
   
    setIntialState(intialState.concat(result))
  };

  return <faqContext.Provider value={{intialState,addfaq,getfaq}}>{props.children}</faqContext.Provider>;
};

export default FaqState;
