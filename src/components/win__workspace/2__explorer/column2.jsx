import { useContext, useEffect, useState } from 'react';
import { DirContext } from '../../../context/directory.jsx'
import levelsData from '../../../data/data.js';
import Column3 from './column3.jsx'
import icon from '../../../assets/icons/icons.js';

export default function Container2( {pcolA, pcolB, pcolC} ) { 
  const colA = pcolA;
  const [colB, setColB] = useState( pcolB );
  const [colC, setColC] = useState( pcolC )
  const [active, setActive] = useState( {} );
  const data =  colB !== undefined ? (levelsData.alldata[colA]?.data || []) : [];
  const hasData = data.length > 0;
  const { setPathB } = useContext( DirContext );

  useEffect(() => {
    setColB( pcolB )
    setPathB('');
    setColC(undefined)
    setActive( {} );
  }, [ pcolA ])

const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      setColB(Number(getID[1])-1)
      setColC(newLVL)
      setActive( { [dataLAB]: true } );
      setPathB(`${dataLAB}/`);
    
      console.log(`
      --------- click ---------
      ID: ${getID}, LABEL: ${dataLAB} `);
    };

  return (
    <>
      {hasData && (
        <div className='container level' id={ `level ${ pcolB }` }>
          <div className='col-h'>
            <h4> Level { pcolB } </h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button title={item.label} className={`${ active[item.label] ? 'active' : '' }`}
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
          <h1>colC - 3: {colC}</h1> */}
        </div>
      )} 
      <Column3 pcolA={colA} pcolB={colB} pcolC={colC} />
    </>
  );
}