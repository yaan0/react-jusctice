import LogoFooter from '../Footer/LogoFooter/LogoFooter'
import FooterNav from '../Footer/FooterNav/FooterNav'
import FooterBottom from "./FooterBottom/FooterBottom";

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
        <LogoFooter/>
        <FooterNav/>
        </div>
        <FooterBottom/>
      </div>
    </div>
  )
};

export default Footer;