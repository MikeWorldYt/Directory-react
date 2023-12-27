import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useState } from 'react';
import Column2 from './column2'


export default function Container(props) {
  const [colA, setColA] = useState(undefined);
  const [colB, setColB] = useState(undefined);
  const colC = undefined;
  const [active, setActive] = useState( {} );
  const [currentLabel, setCurrentLabel] = useState(localStorage.getItem('level1') ||undefined);
  const allData = 'alldata'
  const data = levelsData[allData] || [];
  const hasData = data.length > 0;

  const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      setColA(Number(getID[0])-1)
      setColB(newLVL)
      setActive( { [dataLAB]: true } );
      setCurrentLabel(dataLAB);
      localStorage.setItem('level1', dataLAB);
    
      console.log(`--------- click ---------
      LABEL: ${dataLAB}
      ID: ${getID}
      New level: ${newLVL} `);
    };

  return ( 
    <>
      {hasData && (
        <div className='container level' id={`level${props.colA}`}>
          <div className='col-h'>
            <h4> Level {props.colA}</h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button className={`${ active[item.label] ? 'active' : '' }`} 
                  onClick={() => handleClick(item.id, item.level, item.label) }
                  id={item.id}
                  data-level={item.level}
                  >{item.label}
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
      <Column2 colA={colA} colB={colB} colC={colC}/>

    </>
  );
}

Container.propTypes = {
  colA: PropTypes.string
};