import React from 'react';
import { useState } from 'react';
import UserCard from './UserCard.js'

export default function SidebarUsers({ userList }) {
  const [ userArr, setUserArr ] = useState([...userList])
  // setUserArr(userList);
  function onUserCardClick(e) {
    if(!e.target.closest('.user-card')) return false;
    const indexCard = e.target.closest('.user-card').dataset.id;
    const newUserArr = [...userArr].map(( card, ind ) => {
      if(ind === indexCard) {
        card.isActive = true;
        return card;
      } else {
        return card;
      };
    });
    
    setUserArr(newUserArr);
    console.log(userArr)
  };
  return (
    <div className="users">
      <header className="header">
        <div className="input-group">
          <input type="text" className="searchInput" placeholder="search" />
        </div>
      </header>
     
      <ul className="users-list" onClick={ onUserCardClick }>
        { userArr.map(( user, i ) =>  <UserCard user={ user } key={ i } dataId={ i }/>)}
      </ul>
    </div>
  )
}
