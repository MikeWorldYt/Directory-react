import { useEffect, useState } from 'react';
import './styles/Components.css'

function Path( ) {
  const [level1, setLevel1] = useState('');

  useEffect(() => {
    const storedLevel1 = localStorage.getItem('level1');
    setLevel1(storedLevel1 || '');
  }, []);

  return (
    <>
      <h3 className='path'>Root/ {level1}</h3>
    </>
  )
}

export default Path