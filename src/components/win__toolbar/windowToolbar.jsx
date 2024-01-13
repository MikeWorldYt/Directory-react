import icon from '../../assets/icons/icons.js';

export default function windowToolbar() {
  return (
    <div className='windowToolbar'>
    <button>
      <img className='icon'
        src={ icon.add } />
      <h2 className='windowToolbarText'>New</h2>
    </button>
    <img className='iconDiv'
      src={ icon.div } />
    <button>
      <img className='icon'
        src={ icon.info } />
    </button>
    <button>
      <img className='icon'
        src={ icon.download } />
    </button>
    <img className='iconDiv'
      src={ icon.div } />
    <button>
      <img className='icon'
        src={ icon.sort } />
      <h2 className='windowToolbarText'>Sort</h2>
      <img className='iconSmall'
        src={ icon.chDown } />
    </button>
    <button>
      <img className='icon'
        src={ icon.cols } />
      <h2 className='windowToolbarText'>View</h2>
      <img className='iconSmall'
        src={ icon.chDown } />
    </button>
  </div>
  )
}