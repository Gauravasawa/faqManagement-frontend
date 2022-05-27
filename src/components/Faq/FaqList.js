import React from "react";
import AddFaqForm from "./AddFaqForm";

const FaqList = (props) => {
  const { faq } = props;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{faq.question}</h5>
          <p className="card-text">
            {faq.answer}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default FaqList;
