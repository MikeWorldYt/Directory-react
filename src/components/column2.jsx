import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useState } from 'react';

import Column3 from './column3'

export default function Container2(props) {
  const data =  levelsData.alldata[props.id].data || []; 
  const hasData = data.length > 0;
  const [level, setLevel] = useState(null);
  const [id, setId] = useState(0);

const handleClick = (dataID, dataLVL, dataLAB) => {
      let value = Number(dataLVL) + 1
      let getID = dataID
      setId(Number(getID[1]))
      setLevel(value)

      console.log(`--------- click ---------
      LABEL: ${dataLAB}
      ID: ${getID}
      New level: ${value}
      `);
      
      console.log(Number(getID[1]))
    };

  return (
    <>
      {hasData && (
        <container className='level' id={`level${props.level}`}>
          <div className='col-h'>
            <h4> Level {props.level}</h4>
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
      <Column3 id={id} level={level}/>
    </>
  );
}

Container2.propTypes = {
  id: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
};