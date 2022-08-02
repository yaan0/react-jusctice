import './FooterBottom.css';

const FooterBottom = () => {
  const date = new Date().getFullYear();

  return (
    <div className="FooterBottom">
      <div className="container">
        <p>
          {' '}
          ©&nbsp;
          {date}
          Justice-team. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
