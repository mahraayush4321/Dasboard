import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            Language
          </div>
          <div className="item">
            <MarkChatUnreadIcon className="icon"/>
          </div>
          <div className="div">
            <NotificationsActiveIcon className="icon"/>
          </div>
          <div className="item">
           <img
           src='https://i.pinimg.com/originals/04/3a/04/043a0410c75711f57477992b594cb960.jpg'
           alt=''
           className="avatar"
           />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar