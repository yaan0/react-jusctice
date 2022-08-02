import './FooterBottom.css';

const FooterBottom = () => {
  const date = new Date().getFullYear();

  return (
    <div className="FooterBottom">
      <p>
        ©
        {' '}
        {date}
        {' '}
        Justice-team. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBottom;
