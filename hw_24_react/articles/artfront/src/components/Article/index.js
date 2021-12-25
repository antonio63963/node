import { useSelect, useDispatch } from 'react-redux';
import style from './article.module.css';
import { getPage } from '../../reducer/actions'

export default function Article({article}) {
  const dispatch = useDispatch();
  console.log(article);
  const { item, status } = article;
  
  return (
    <div>
      {status !== 'ok' ? 
        'Loading...' :
      
      <>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </>
      
      }
    </div>
  )
}
