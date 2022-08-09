import { useForm } from 'react-hook-form';
import './SignIn.css';

const SignIn = ({ signInIsOpen, setSignInIsOpen, setSignUpIsOpen }) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data));

    setSignInIsOpen(false);
    reset();
  };
  return (
    <div
      className={signInIsOpen ? 'modal active' : 'modal'}
    >
      <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-close" onClick={() => setSignInIsOpen(false)}>
          <span className="modal-close__line1 modal-close__line" />
          <span className="modal-close__line2 modal-close__line" />
        </div>

        <h3 className="user-title">Create an account</h3>

        <label className="image-replace cd-email">
          Email
          <input
            className="has-border has-padding"
            {...register('email', {
              required: 'Введите ваш email',
            })}
            placeholder="Your email"
          />

          {errors?.email && <p className="user-errors">{errors?.email?.message || 'Error'}</p>}
        </label>

        <label className="image-replace cd-password">
          Password
          <input
            className="has-border has-padding"
            {...register('password', {
              required: 'Введите ваш password',
            })}
            type="password"
            placeholder="Enter your password"
          />
          {errors?.password && <p className="user-errors">{errors?.password?.message || 'Error'}</p>}
        </label>

        <input className="border-signUp" type="submit" name="Register" />

        <p className="user-have-account">
          No account?
          <span
            className="userSignIn-transitional-link "
            onClick={() => { setSignInIsOpen(false); setSignUpIsOpen(true); }}
          >
            Create one
          </span>
        </p>

      </form>
    </div>
  );
};

export default SignIn;
