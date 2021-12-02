import React from 'react';

import UserCard from './UserCard.js'

export default function SidebarUsers({ userList, isHide }) {
  return (
    <div className={ `users ${isHide ? 'hidden': 'block'}`}>
      <header className="header">
      {/* <i class="yourData fas fa-paw"></i> */}
      <i className="yourData fal fa-paw"></i>
        <div className="input-group">
          <input type="text" className="searchInput" placeholder="search" />
        </div>
      </header>
     
      <ul className="users-list">
        { userList.map(( user, i ) =>  <UserCard user={ user } key={ i } dataId={ i }/>)}
      </ul>
    </div>
  )
}
