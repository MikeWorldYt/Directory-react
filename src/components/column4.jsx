import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
import { useEffect, useState } from 'react';

export default function Container4(props) {
  const [colA, setColA] = useState(props.colA);
  const [colB, setColB] = useState(props.colB);
  const [colC, setColC] = useState(props.colC);
  const colD = props.colD;
  const data = colD !== undefined ? ( levelsData.alldata[colA].data[colB].data[0].data || [] ) : []; // testing data
  const hasData = data.length > 0;

  useEffect(() => {
    setColA(props.colA)
    setColB(props.colB)
    setColC(props.colC)
  }, [props.colC])


  return (
    <>
      {hasData && (
        <div className='container level' > {/* id={`level${props.colC}`} */}
            <div className='col-h'>
            <h4> Level 4 {/*{props.colC}*/}</h4>
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
          <h1>colD - 4: {colD}</h1>
        </div>
      )}
    </>
  );
}

Container4.propTypes = {
  colA: PropTypes.string,
  colB: PropTypes.string,
  colC: PropTypes.string,
  colD: PropTypes.string
};