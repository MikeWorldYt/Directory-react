import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
// import { useEffect, useState } from 'react';

export default function Container4(props) {
  const colA = props.colA
    const data = levelsData.alldata[1].data[0].data[0].data || [] ///colD !== undefined ? ( levelsData.alldata[1].data[0].data[0].data || [] ) : []; // testing data
    const hasData = data.length > 0;

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