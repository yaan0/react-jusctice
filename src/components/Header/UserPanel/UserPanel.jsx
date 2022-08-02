import Cart from '../Cart/Cart'

import './UserPanel.css'
import user from '../../../resourses/img/svg/user.svg'


const UserPanel = () => {
  return (
    <div className='header-user'>
      <img className='user-img' src={user} alt='user'/>
        <a className='user-link'>Sign up</a>
          /
        <a className='user-link'>Sing in</a>
      <div> <Cart/> </div>
    </div>
  )
}

export default UserPanel;