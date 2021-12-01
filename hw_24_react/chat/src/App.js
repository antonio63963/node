import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';
import './components/style.css';

const userList = [
  {
    chatName: 'Vasa',
    userPhoto: 'https://ilike.pet/upload/iblock/786/786fc0798233006257d41dc0132f6387.jpg',
    lastChatMessage: 'у нас закончилась колбаса!!!',
    isActive: false,
    isOnline: true,
  },
  {
    chatName: 'Bosya',
    userPhoto: 'https://krapka.club/wp-content/uploads/2019/11/1555780815170653117-360x195.jpg',
    lastChatMessage: 'Рыба лучше корма в 100 раз!',
    isActive: false,
    isOnline: true,
  },
]
function App() {
  return (
    <div className="app">
      <Sidebar userList={ userList } />
      <Content />
    </div>
  );
}

export default App;
