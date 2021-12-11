import {useState, useEffect} from 'react-redux';
import {useSelector} from 'react-redux';

function FilmsPage() {
  const test = useSelector(state => state.films.ggg);
  
  return (
    <>
      <h1>Films</h1>
      <div>Test: {test}</div>
    </>
  )
}

export default FilmsPage;