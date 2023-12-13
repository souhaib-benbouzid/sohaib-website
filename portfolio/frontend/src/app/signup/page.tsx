type Props = {};

export default function Signup() {
  return (
    <>
      <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='email'></input>
      </div>
      <div className='form-control'>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password'></input>
      </div>
      <div className='form-control'>
        <input id='accept' name='accept' type='checkbox'></input>
        <label htmlFor='accept'>Accept Terms</label>
      </div>
    </>
  );
}
