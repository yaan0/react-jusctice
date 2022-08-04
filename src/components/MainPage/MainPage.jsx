import Card from '../Card/Card';

import './MainPage.css';

import heart from '../../resourses/img/svg/heart.svg';

const data = [
  {
    id: 1,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 2,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 3,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 4,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 5,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 6,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 7,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 8,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    id: 9,
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
];

const MainPage = () => (

  <div className="container main__block">
    <div className="main__wrapper">
      <h1 className="title-wrapper">
        I
        <img src={heart} alt="heart" />
        {' '}
        ICE CREAM
        {' '}
      </h1>
    </div>
    <div className="main-card">
      {data.map(({
        url, title, price, id,
      }) => <Card img={url} price={price} title={title} id={id} />)}
    </div>
  </div>
);

export default MainPage;
