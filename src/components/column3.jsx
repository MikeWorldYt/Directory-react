import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useEffect, useState } from 'react';

import Column4 from './column4'
export default function Container3(props) {
  const [colA, setColA] = useState(props.colA);
  const [colB, setColB] = useState(props.colB);
  const [colC, setColC] = useState(props.colC);
  const [colD, setColD] = useState(undefined);
  const data = colC !== undefined ? ( levelsData.alldata[colA].data[colB].data || [] ) : [];
  const hasData = data.length > 0;

  useEffect(() => {
    setColA(props.colA)
    setColB(props.colB)
    setColC(props.colC)
    setColD(undefined)
  }, [props.colB])
const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      
      setColC(Number(getID[2])-1)
      setColD(newLVL)
    
      console.log(`--------- click ---------
      LABEL: ${dataLAB}
      ID: ${getID}
      New level: ${newLVL}
      `);
      
      console.log(Number(getID[1])-1)
    };

  return (
    <>
      {hasData && (
        <div className='container level' id={`level${props.colC}`}>
          <div className='col-h'>
            <h4> Level {props.colC}</h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleClick(item.id, item.level, item.label)}
                  id={item.id}
                  data-level={item.level}
                  >{item.label}
                </button>
              </li>
            ))}
          </ul>
          <h1>DEBUG DATA:</h1>
          <h1>colA - 1: {colA}</h1>
          <h1>colB - 2: {colB}</h1>
          <h1>colC - 3: {colC}</h1>
        </div>
      )}
      
    </>
  );
}

Container3.propTypes = {
  colA: PropTypes.string,
  colB: PropTypes.string,
  colC: PropTypes.string
};