import {useState} from 'react';

const useSlider = (initState) => {
  const [inputs, setInputs] = useState(initState);

  const handleInputChange = (event, value) => {
    console.log(event);
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: value,
    }));
  };

  return [inputs, handleInputChange];
};

export default useSlider;
