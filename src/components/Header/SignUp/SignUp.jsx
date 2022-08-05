import './SignUp.css';

const SignUp = ({ modalActive, setModalActive }) => (

  <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
    <div className={modalActive ? 'modal-content active' : 'modal'} onClick={(e) => e.stopPropagation()} />
  </div>
);

export default SignUp;
