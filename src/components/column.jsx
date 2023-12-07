import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';


export default function Container(props) {
  const allData = 'alldata' // modificar para pintar
  const data = levelsData[allData] || []; // modificar para pintar aparte
  const hasData = data.length > 0;
  const filter1 = Number(`${props.id}`) + 1

  const handleClick = () => {
      
      console.log(`click ${filter1} `);
      console.log('array')
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
                <button onClick={handleClick} id={item.id} data-level={item.level}>
                  {item.label}
                </button>
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