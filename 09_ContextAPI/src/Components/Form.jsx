import React, {useState,useContext} from 'react';
import UserContext from "../Context/UserContext";

const FormInput = ({ label, type, value, onChange }) => {
  const {setuser} = useContext(UserContext);
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ padding: '0.5rem', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      />
    </div>
  );
};

const Form = () => {
  const {setuser} = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setuser({inputValue});
  }
  return (
    <form>
      <FormInput 
        label="Username"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onSubmit}type="submit" style={{ padding: '0.5rem 1rem' }}>Submit</button>
    </form>
  );
};

export default Form;
