import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useState } from 'react';


export default function Container2(props) {
  const data =  levelsData.alldata[props.id].data || []; 
  const hasData = data.length > 0;
  const [level, setLevel] = useState(null);
  const [id, setId] = useState(0);

const handleClick = (dataID, dataLVL) => {
      console.log(`--------- click ---------`);
      let value = Number(dataLVL) + 1
      let getID = dataID
      console.log(Number(getID[0])-1)
      setId(Number(getID[0])-1)
      setLevel(value)
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

    </>
  );
}

Container2.propTypes = {
  id: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
};