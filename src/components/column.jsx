import './styles/Components.css'


function Container(props) {
  return (
      <container id='' className='container '>
        <div className='col-h'>
          <h4> Level {props.id}</h4>
        </div>
        <ul>
          <li><button>element</button></li>
          <li><button>element</button></li>
          <li><button>element</button></li>
          <li><button>element</button></li>
          <li><button>element</button></li>
        </ul>
      </container>
  )
}

export default Container