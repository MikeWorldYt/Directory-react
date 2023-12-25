import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useState } from 'react';

/// import Column3 from './column3'

export default function Container2(props) {
  const data =  props.lastCol !== undefined ? (levelsData.alldata[props.lastCol]?.data || []) : [];
  const hasData = data.length > 0;
  const colA = props.lastCol
  const [selectioned, setSelectioned] = useState(undefined);
  const [colC, setColC] = useState(null);

const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      
      setSelectioned(Number(getID[1])-1)
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
        <container className='level' id={`level${props.colB}`}>
          <div className='col-h'>
            <h4> Level {props.colB}</h4>
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
      {/*<Column3 colA={colA} lastCol={selectioned} level={colC} />*/}
    </>
  );
}

Container2.propTypes = {
  lastCol: PropTypes.string.isRequired,
  colB: PropTypes.string.isRequired
};