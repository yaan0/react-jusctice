import './Card.css';

const Card = ({ data }) => (
  <div className="card">
    <div className="card-container container">
      <div className="card-item">
        <img className="card__logo-image" src={data.url} alt="ice-cream" />
      </div>
      <div className="card-info">

        <h3 className="card-title">
          {data.title}

        </h3>
        <div className="card-text">
          <p className="card-item-text">
            {data.price}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
