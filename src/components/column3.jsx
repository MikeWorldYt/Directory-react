import { useContext, useEffect, useState } from 'react';
import { DirContext } from '../context/directory'
import levelsData from './data';
import Column4 from './column4'
import icon from '../assets/icons/icons.js';
export default function Container3( {pcolA, pcolB, pcolC} ) {
  const [colA, setColA] = useState( pcolA );
  const [colB, setColB] = useState( pcolB );
  const [colC, setColC] = useState( pcolC );
  const [colD, setColD] = useState(undefined);
  const [active, setActive] = useState( {} );
  const data = colC !== undefined ? ( levelsData.alldata[colA].data[colB].data || [] ) : [];
  const hasData = data.length > 0;
  const { setPathC } = useContext( DirContext );

  useEffect(() => {
    setColA( pcolA )
    setColB( pcolB )
    setColC( pcolC )
    setPathC('');
    setColD(undefined)
    setActive( {} );
  }, [ pcolB ])
const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      setColC(Number(getID[2])-1)
      setColD(newLVL)
      setActive( { [dataLAB]: true } );
      setPathC(`${dataLAB}/`);
    
      console.log(`
      --------- click ---------
      ID: ${getID}, LABEL: ${dataLAB} `);
    };

  return (
    <>
      {hasData && (
        <div className='container level' id={ `level${ pcolC }` }>
          <div className='col-h'>
            <h4> Level { pcolC }</h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button title={item.label} className={`tooltip ${ active[item.label] ? 'active' : '' }`}
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
      <Column4 pcolA={colA} pcolB={colB} pcolC={colC} pcolD={colD} />
    </>
  );
}