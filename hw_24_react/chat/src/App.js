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
  {
    userName: "Бля-бля кот",
    userPhoto: './images/for_chat.jpg',
    lastChatMessage: 'жила-была топор-пила',
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
  ],
  "Бля-бля кот": [
    {userName: 'You', userPhoto: './images/for_chat.jpg', message: 'Ну что, кто делал резюмеху чтобы найти себе хозяина с жильем???', date: '10.12.21'}, 
    {userName: 'Bosya', userPhoto: 'https://krapka.club/wp-content/uploads/2019/11/1555780815170653117-360x195.jpg', message: 'Братан, я пока Lotok.js не освою, не научусь в него ходить - буду жить в подвале...', date: '11.12.21'}, 
    {userName: 'Vasa', userPhoto: 'https://ilike.pet/upload/iblock/786/786fc0798233006257d41dc0132f6387.jpg', message: 'Да, сейчас без Лотка никуда не устроишься, все хотят еще лоток- нэйтив(((', date: '11.12.21'}, 
    {userName: 'You', userPhoto: './images/for_chat.jpg', message: 'Да ладно! Я написал, что я full stack! Знаю Lotock.js + Unitaz.js!!!', date: '11.12.21'}, 
    {userName: 'You', userPhoto: './images/for_chat.jpg', message: 'Пригласили на собеседование, дали тестовое если интересно кину в чат!', date: '11.12.21'}, 
  ]
};

function App() {
  const [ userArr, setUserArr ] = useState([...userList]);
  const [ messages, setMessages ] = useState([]);
  const [ chatName, setChatName ] = useState(null);
  const [ isHideSidebar, setIsHideSidebar ] = useState(false);

  window.addEventListener('resize', () => {
    if(window.outerWidth > 520 && isHideSidebar === true) setIsHideSidebar(false);
  })
  function onAppClick(e) {
    if(e.target.closest('.user-card')) {
      const indexCard = e.target.closest('.user-card').dataset.id;
      console.log('ind: ', indexCard);
      const newUserArr = userArr.map(( card, ind ) => {
        if(ind === +indexCard) {
          card.isActive = true;
          setChatName(card.userName);
          setMessages(userChats[card.userName])
        } else {
          card.isActive = false;
        }
        if(window.outerWidth <= 520) setIsHideSidebar(true);
        return card;
      });
      setUserArr(newUserArr);
    };

    if(e.target.matches('.openSidebar')) setIsHideSidebar(false);
  };
  
  return (
    <div className="app" onClick={ onAppClick }>
      <Sidebar userList={ userArr } isHide={ isHideSidebar }/>
      <Content messages={ messages } chatName={ chatName } isHide={ isHideSidebar }/>
    </div>
  );
}

export default App;
