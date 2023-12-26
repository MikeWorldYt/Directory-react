import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useEffect, useState } from 'react';


export default function Container3(props) {
  const data = props.colC !== undefined ? ( levelsData.alldata[props.colA].data[props.colB].data || [] ) : [];
  const hasData = data.length > 0;
  const [colA, setColA] = useState(props.colA)
  const [colB, setColB] = useState(props.colB);
  // const [selectioned, setSelectioned] = useState(undefined);
  // const [colD, setColD] = useState(null);

  useEffect(() => {
    console.log('active')
    setColA(props.colA)
    setColB(props.colB)
  }, [props.colA])
const handleClick = (dataID, dataLVL, dataLAB) => {
      let getID = dataID
      let newLVL = Number(dataLVL) + 1
      
      //setSelectioned(Number(getID[1])-1)
      //setColD(newLVL)

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
        <container className='level' id={`level${props.colC}`}>
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
        </container>
      )}

    </>
  );
}

Container3.propTypes = {
  colA: PropTypes.string.isRequired,
  colB: PropTypes.string.isRequired,
  colC: PropTypes.string.isRequired
};