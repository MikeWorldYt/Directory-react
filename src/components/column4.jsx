import { useEffect, useState } from 'react';
import levelsData from './data';
import icon from '../assets/icons/icons.js';

export default function Container4( {pcolA, pcolB, pcolC, pcolD} ) {
  const [colA, setColA] = useState( pcolA );
  const [colB, setColB] = useState( pcolB );
  const [colC, setColC] = useState( pcolC );
  const [colD, setColD] = useState( pcolD );
  const data = colD !== undefined ? ( levelsData.alldata[colA].data[colB].data[colC].data || [] ) : []; // testing data
  const hasData = data.length > 0;

  useEffect(() => {
    setColA( pcolA )
    setColB( pcolB )
    setColC( pcolC )
    setColD( pcolD )
  }, [ pcolC ])

  const handleClick = (dataID, dataLVL, dataLAB) => {
    let getID = dataID
    
    console.log(`
    --------- click ---------
    ID: ${getID}, LABEL: ${dataLAB} `);
  };
  return (
    <>
      {hasData && (
        <div className='container level' id={ `level${ pcolD }` }>
            <div className='col-h'>
            <h4> Level { pcolD } </h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleClick(item.id, item.level, item.label)}
                  id={item.id}
                  data-level={item.level}
                  >
                  <img className='icon'
                    src={  icon[item.ico] } />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {/* <h1>DEBUG DATA:</h1>
          <h1>colA - 1: {colA}</h1>
          <h1>colB - 2: {colB}</h1>
          <h1>colC - 3: {colC}</h1>
          <h1>colD - 4: {colD}</h1> */}
        </div>
      )}
    </>
  );
}