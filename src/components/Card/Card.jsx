import './Card.css';

const Card = ({ img, title, price }) => (
  <div className="card">
    <div className="card-container container">
      <div className="card-item">
        <img className="card__logo-image" src={img} alt="ice-cream" />
      </div>
      <div className="card-info">
        <h3 className="card-title">
          {title}
        </h3>
        <div className="card-text">
          <p className="card-item-text">
            {price}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
