import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';

export default function Container(props) {
  const allData = 'alldata' // TODO:             modificar para pintar
  const data = levelsData[allData] || []; // TODO:    modificar para pintar aparte
  const hasData = data.length > 0;
  const filter1 = Number(`${props.id}`) + 1

  const handleClick = (dataLevel) => {
      console.log(`click `);
      console.log({dataLevel})
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
                <label onClick={() => handleClick(item.data)} id={item.id} data-level={item.level}>
                  <input name={props.id} type="radio"></input>{item.label}
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