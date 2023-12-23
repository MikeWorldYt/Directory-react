import PropTypes from 'prop-types';
import './styles/Components.css';
import levelsData from './data';
export default function Container2(props) {
  const allData = 'alldata' // TODO:             modificar para pintar
  const data =  levelsData.alldata[props.id].data || []; // TODO:    modificar para pintar aparte
  const hasData = data.length > 0;
  /// const currentLevel = props.level

const handleClick = (dataLevel) => {
      console.log(`click `);
      ///console.log({dataLevel})
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
        <container className='level' id={`level${props.level}`}>
          <div className='col-h'>
            <h4> Level {props.level}</h4>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleClick(item.data)}
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