import  { useState } from 'react';
import Input from './Input';  // Import the Input component

function Form() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setError('Name is required!');
    } else {
      setError('');
      console.log('Form Submitted:', name);
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={name}
        onChange={handleChange}
        error={error}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
