import React,{useState,useContext} from 'react';
import faqContext from '../../context/faqContext';

const AddFaqForm = (props) => {
const context = useContext(faqContext);
const {addfaq} = context;

    const [faq,setFaq] = useState({
        question: "",
        answer: ""
    })

     const onChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    addfaq(faq.question,faq.answer)
    setFaq({question: "",answer: ""})
  }
    return (
      <>
        <div className="container">
          <h1>Add FAQ's</h1>
          <hr />
          <form>
            <div className="mb-3">
              <label htmlFor="question" className="form-label">
                Question
              </label>
              <input
                type="question"
                name="question"
                className="form-control"
                id="question"
                aria-describedby="emailHelp"
                onChange={onChange}
                value={faq.question}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="answer" className="form-label">
                Answer
              </label>
              <input
                type="answer"
                name="answer"
                className="form-control"
                id="answer"
                aria-describedby="emailHelp"
                onChange={onChange}
                value={faq.answer}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handelSubmit}>
              Submit Faq
            </button>
          </form>
        </div>
      </>
    );
}

export default AddFaqForm
