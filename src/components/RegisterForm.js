import useSignUpForm from '../hooks/RegisterHooks';

const RegisterForm = () => {
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

  console.log('RegisterForm', inputs);

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleInputChange}/>
      <input name="password" type="password" onChange={handleInputChange}/>
      <input name="email" type="email" onChange={handleInputChange}/>
      <input name="full_name" onChange={handleInputChange}/>
      <button>Tallenna</button>
    </form>
  );
};

export default RegisterForm;
