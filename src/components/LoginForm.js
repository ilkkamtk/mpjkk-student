import useLoginForm from '../hooks/LoginHooks';

const LoginForm = () => {
  const doLogin = () => {
    console.log('lomake lähtee');
  };

  const {inputs, handleInputChange, handleSubmit} = useLoginForm(doLogin);

  console.log('LoginForm', inputs);

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
      <button>Tallenna</button>
    </form>
  );
};

export default LoginForm;
