import { useContext, useState } from 'react'
import { DirContext } from '../../../context/directory.jsx'
import levelsData from '../../../data/data.js';
import Column2 from './column2.jsx'
import icon from '../../../assets/icons/icons.js';

export default function Container( ) {
  const [colA, setColA] = useState(undefined);
  const [colB, setColB] = useState(undefined);
  const colC = undefined;
  const [active, setActive] = useState( {} );
  const allData = 'alldata'
  const data = levelsData[allData] || [];
  const hasData = data.length > 0;
  const { setPathA } = useContext( DirContext );

  const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      setColA(Number(getID[0])-1)
      setPathA(`${dataLAB}`);
      setColB(newLVL)
      setActive( { [dataLAB]: true } );
    
      console.log(`
      --------- click ---------
      ID: ${getID}, LABEL: ${dataLAB} `);
    };

  return ( 
    <>
      {hasData && (
        <div className='container level' id={ `level 1` }>
          <div className='col-h'>
            <h4> Level 1 </h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button title={item.label} className={`${ active[item.label] ? 'active' : '' }`} 
                  onClick={() => handleClick(item.id, item.level, item.label) }
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
      <Column2 pcolA={colA} pcolB={colB} pcolC={colC}/>
    </>
  );
}