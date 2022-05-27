import React,{useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import faqContext from '../../context/faqContext';
import AddFaqForm from './AddFaqForm';
import FaqList from './FaqList';


const Faq = (props) => {

    const navigate = useNavigate();

    const faq = useContext(faqContext);
    const { intialState, getfaq } = faq;
    
    useEffect(() => {
       if(localStorage.getItem('token')){
           getfaq();
       }
       else(
        navigate('/login')
       )
    }, [])

    return (
      <div className="container">
        <AddFaqForm />
        <hr />
        <h2>Your All Faq's</h2>
        <div className="row">
          <p className="my-2" style={{marginBottom: '20px'}}>{intialState.length === 0 && "Please Add FAQ's"}</p>
          {intialState.map((faq)=>(
              <FaqList key={faq._id} faq={faq} />
          ))}
        </div>
      </div>
    );
}

export default Faq
