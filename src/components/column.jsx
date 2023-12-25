import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useState } from 'react';

import Column2 from './column2'

export default function Container(props) {
  const allData = 'alldata'
  const data = levelsData[allData] || [];
  const hasData = data.length > 0;
  const [selectioned, setSelectioned] = useState(undefined);
  const [colB, setColB] = useState(null);

  const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      
      setSelectioned(Number(getID[0])-1)
      setColB(newLVL)

      console.log(`--------- click ---------
      LABEL: ${dataLAB}
      ID: ${getID}
      New level: ${newLVL}
      `);
      
      console.log(Number(getID[0])-1)
    };

  return (
    <>
      {hasData && (
        <container className='level' id={`level${props.colA}`}>
          <div className='col-h'>
            <h4> Level {props.colA}</h4>
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
        </container>
      )}
      <Column2 lastCol={selectioned} colB={colB}/>
    </>
  );
}

Container.propTypes = {
  colA: PropTypes.string.isRequired
};