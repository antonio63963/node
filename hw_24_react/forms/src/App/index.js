
import style from './App.module.css';
import Footer from '../components/Footer';
import SignIn from '../components/registration/Signin';

function App() {
  return (
    <div className={style.app}>
      <div className={style.content}>
        <SignIn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
