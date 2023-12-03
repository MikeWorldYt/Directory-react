import './styles/Components.css'
import React, { useState } from 'react';

function Container(props) {
  const levelsData = {
    level1: ['Tienda Roja', 'Tienda Azul', 'Tienda Verde'],
    level2: ['pinta la', 'segunda columna'],
    level3: ['pinta la', 'tercera columna'],
  //  level4: ['pinta la', 'cuarta columna'],
  };

  const data = levelsData[`level${props.id}`] || [];
  const hasData = data.length > 0;

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
                <button>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </container>
      )}
    </>
  );
}

export default Container