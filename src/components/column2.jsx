import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useEffect, useState } from 'react';

import Column3 from './column3'

export default function Container2(props) {
  const colA = props.colA
  const [colB, setColB] = useState(props.colB);
  const [colC, setColC] = useState(props.colC)
  const data =  colB !== undefined ? (levelsData.alldata[colA]?.data || []) : [];
  const hasData = data.length > 0;

  useEffect(() => {
    setColB(props.colB)
    setColC(undefined)
  }, [props.colA])

const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      
      setColB(Number(getID[1])-1)
      setColC(newLVL)
    
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
        <div className='container level' id={`level2`}>
          <div className='col-h'>
            <h4> Level 2</h4>
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
          {/* <h1>DEBUG DATA:</h1>
          <h1>colA - 1: {colA}</h1>
          <h1>colB - 2: {colB}</h1>
          <h1>colC - 3: {colC}</h1> */}
        </div>
      )} 
      <Column3 colA={colA} colB={colB} colC={colC} />
    </>
  );
}

Container2.propTypes = {
  colA: PropTypes.number,
  colB: PropTypes.number,
  colC: PropTypes.number
};