import { useSelect, useDispatch } from 'react-redux';

export default function Article({article}) {
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
