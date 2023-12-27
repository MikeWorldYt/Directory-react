import './styles/Components.css'
import Path from './path'

export default function Head( { text } ) {
  return (
    <section id='head'>
      <div className='container'>
        <Path text={text}/>
      </div>
    </section>
  )
}