import PropTypes from 'prop-types';
import './styles/Components.css'

export default function Path( { text } ) {
  return (
    <>
      <h3 className='path'>Root/{text}</h3>
    </>
  )
}

Path.propTypes = {
  text: PropTypes.func
}