import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useState } from 'react';

import Column2 from './column2'

export default function Container(props) {
  const allData = 'alldata' // TODO:             modificar para pintar
  const data = levelsData[allData] || []; // TODO:    modificar para pintar aparte
  const hasData = data.length > 0;
  const newColumn = Number(props.id) + 1;
  const [level, setLevel] = useState(null);

  const handleClick = (dataID, dataLVL) => {
      console.log(`--------- click ---------`);
      console.log(Number(dataLVL) + 1)
      let value = Number(dataLVL) + 1
      // console.log({dataID})
      setLevel(value)
    };

  return (
    <>
      {hasData && (
        <container className='level' id={`level${props.id}`}>
          <div className='col-h'>
            <h4> Level {props.id}</h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleClick(item.id, item.level)}
                  id={item.id}
                  data-level={item.level}
                  >{item.label}
                </button>
              </li>
            ))}
          </ul>
        </container>
      )}
      <Column2 id='1' level={level}/>
    </>
  );
}

Container.propTypes = {
  id: PropTypes.string.isRequired,
};