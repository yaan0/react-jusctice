import Card from '../Card/Card';

import './MainPage.css';

import heart from '../../resourses/img/svg/heart.svg';

const data = [
  {
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
    url: '/images/icecream.png',
    title: 'Snow Tender Ice Cream',
    price: '$243.00',
  },
  {
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
      {data.map(({ url, title, price }) => <Card img={url} price={price} title={title} />)}
    </div>
  </div>
);

export default MainPage;
