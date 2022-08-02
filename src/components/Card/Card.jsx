import './Card.css';
import CardItem from '../../resourses/img/png/ice-cream.png';


const Card = ({label, price}) => (
  <div className='card'>
      <div className='card-container container'>
        <div className='card-item'>
          <img className='card__logo-image' src={CardItem} alt='ice-cream'/>
        </div>
        <div className='card-info'>

        <h3 className='card-title'>
          {label}

        </h3>
          <div className='card-text'>
          <p className='card-item-text'>
            {price}
          </p>
          </div>
        </div>
      </div>
  </div>
  );


export default Card;