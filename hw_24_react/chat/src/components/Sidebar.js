import React from 'react';
import { useState } from 'react';
import UserCard from './UserCard.js'

export default function SidebarUsers({ userList }) {
  return (
    <div className="users">
      <header className="header">
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
