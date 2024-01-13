import { useContext } from 'react'
import { DirContext } from '../../../context/directory'
import '../../styles/Components.css'
import icon from '../../../assets/icons/icons.js';

const Chevron = (
  <img className='iconSmall' src={icon.chRight} />
);

export default function Head() {
  const { pathA, pathB, pathC } = useContext( DirContext );
  return (
    <section id='head'>
      <div className='container'>
        <h4 className='path'>Root
        {Chevron}
        {pathA}
        {pathB}
        {pathC}
        </h4>
      </div>
    </section>
  )
}