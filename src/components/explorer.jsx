import Column from './column'
import './styles/Components.css'

export default function Explorer(props) {
  return (
    <section id='explorer'>
      <Column colA='1' setText={props.setText}/>
    </section>
  )
}

