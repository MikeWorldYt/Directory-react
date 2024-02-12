import icon from '../../assets/icons/icons.js';

export default function windowBar() {
  return (
    <>
      <div className='windowBar'>
        <img className='icon'
          src={ icon.app } />
        <h4 className='windowBarTitle'>File Explorer ( Demo )</h4>
      </div>
    </>
  )
}