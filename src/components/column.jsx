import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useState } from 'react';

export default function Container(props) {
  const allData = 'alldata' // TODO:             modificar para pintar
  const data = levelsData[allData] || []; // TODO:    modificar para pintar aparte
  const hasData = data.length > 0;
  const filter1 = Number(`${props.id}`) + 1;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (dataLevel) => {
      console.log(`click `);
      console.log({dataLevel})
      setSelectedItem(dataLevel);
    };

    /*function LevelBuilder(v1, v2){
      this.v1 = v1
      this.v2 = v2
    }
  
    let buildLevel = new LevelBuilder(1, 2)
    */
  
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
                <label
                  onClick={() => handleClick(item.data)}
                  id={item.id}
                  data-level={item.level}
                  ><input 
                  name={props.id}
                  type="radio"
                  className={selectedItem === item ? 'checked' : ''}
                  checked={selectedItem === item}
                  onChange={() => {handleClick(item)}}
                  ></input>{item.label}
                </label>
              </li>
            ))}
          </ul>
        </container>
      )}
    </>
  );
}

Container.propTypes = {
  id: PropTypes.string.isRequired,
};