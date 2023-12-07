import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';


export default function Container(props) {
  const allData = 'alldata' // modificar para pintar
  const data = levelsData[allData] || []; // modificar para pintar aparte
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