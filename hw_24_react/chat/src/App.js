import React from 'react';
import { useState } from 'react';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';
import './components/style.css';

const userList = [
  {
    userName: 'Vasa',
    userPhoto: 'https://ilike.pet/upload/iblock/786/786fc0798233006257d41dc0132f6387.jpg',
    lastChatMessage: 'у нас закончилась колбаса!!!',
    isActive: false,
    isOnline: true,
  },
  {
    userName: 'Bosya',
    userPhoto: 'https://krapka.club/wp-content/uploads/2019/11/1555780815170653117-360x195.jpg',
    lastChatMessage: 'Рыба лучше корма в 100 раз!',
    isActive: false,
    isOnline: true,
  },
];
const userChats = {

  Vasa: [
    {userName: 'Vasa', userPhoto: 'https://ilike.pet/upload/iblock/786/786fc0798233006257d41dc0132f6387.jpg', message: 'Hello, bro! давай пойдем на мышей!!! я знаю хде потолще)))', date: '11.12.21'}, 
    {userName: 'You', userPhoto: 'https://go64.ru/upload/quickly/cat-2143332_1280.jpg', message: 'Братан, я нажрался мяса прямо со стола хозяина, поэтому терпеть не могу мышей', date: '11.12.21'}, 
    {userName: 'You', userPhoto: 'https://go64.ru/upload/quickly/cat-2143332_1280.jpg', message: 'Упс! меня кажется спалили, возможно я не откажусь от предложения', date: '11.12.21'}, 
  ],
  Bosya: [
    {userName: 'You', userPhoto: 'https://go64.ru/upload/quickly/cat-2143332_1280.jpg', message: 'у меня трагедия - закончилась колбаса!', date: '10.12.21'}, 
    {userName: 'Bosya', userPhoto: 'https://krapka.club/wp-content/uploads/2019/11/1555780815170653117-360x195.jpg', message: 'Братан, я не знаю как ты будешь жить', date: '11.12.21'}, 
    {userName: 'You', userPhoto: 'https://go64.ru/upload/quickly/cat-2143332_1280.jpg', message: 'Ха! Майдан еще никто не отменял, пойду нассу в тапки! ;)', date: '11.12.21'}, 
  ]
};

function App() {
  const [ userArr, setUserArr ] = useState([...userList]);
  const [ messages, setMessages ] = useState([]);
  const [ chatName, setChatName ] = useState(null);

  function onAppClick(e) {
    if(e.target.closest('.user-card')) {
    const indexCard = e.target.closest('.user-card').dataset.id;
    console.log('ind: ', indexCard);
    const newUserArr = userArr.map(( card, ind ) => {
      if(ind === +indexCard) {
        card.isActive = true;
        card.isActive = false;
        setChatName(card.userName);
        setMessages(userChats[card.userName])
      } 
      return card;
    });
    
    setUserArr(newUserArr);
    console.log(newUserArr);
    console.log(chatName);
  }
  };
  return (
    <div className="app" onClick={ onAppClick }>
      <Sidebar userList={ userList } />
      <Content messages={ messages } chatName={ chatName }/>
    </div>
  );
}

export default App;
