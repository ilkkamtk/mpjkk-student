import useSignUpForm from '../hooks/RegisterHooks';

const RegisterForm = () => {
  const doRegister = () => {
    console.log('lomake lähtee');
  };

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(doRegister);

  console.log('RegisterForm', inputs);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        onChange={handleInputChange}
        value={inputs.username}
      />
      <input
        name="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.password}
      />
      <input
        name="email"
        type="email"
        onChange={handleInputChange}
        value={inputs.email}
      />
      <input
        name="full_name"
        onChange={handleInputChange}
        value={inputs.full_name}
      />
      <button>Tallenna</button>
    </form>
  );
};

export default RegisterForm;
