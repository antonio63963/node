import style from '../WorldCat/style.module.css';
import photo1 from './img/1.jpg';
import photo2 from './img/2.jpg';
import photo3 from './img/3.jpg';
import photo4 from './img/4.jpg';
import photo5 from './img/5.jpg';
import photo6 from './img/6.jpg';

function WorldAfter() {
  return (
    <div className={style.photoContainer}>
      <div className={style.wpapPhoto}>
        <img src={photo1} alt="cat1" />
      </div>
      <div className={style.wpapPhoto}>
        <img src={photo2} alt="cat2" />
      </div>
      <div className={style.wpapPhoto}>
        <img src={photo3} alt="cat3" />
      </div>
      <div className={style.wpapPhoto}>
        <img src={photo4} alt="cat4" />
      </div>
      <div className={style.wpapPhoto}>
        <img src={photo5} alt="cat5" />
      </div>

      <div className={style.wpapPhoto}>
        <img src={photo6} alt="cat6" />
      </div>
    </div>
  )
}
export default WorldAfter;