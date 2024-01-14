import { useContext } from 'react'
import { DirContext } from '../../../context/directory'
import '../../styles/Components.css'
import icon from '../../../assets/icons/icons.js';

const Chevron = (
  <img className='iconSmall' src={icon.chRight} />
);

export default function Head() {
  const { pathA, pathB, pathC } = useContext( DirContext );

  const dirA = pathA === '' ? '' : (Chevron);
  const dirB = pathB === '' ? '' : (Chevron);
  const dirC = pathC === '' ? '' : (Chevron);
  return (
    <section id='head'>
      <div className='container'>
        <h4 className='path'>Root
        {Chevron}
        {pathA}{dirA}
        {pathB}{dirB}
        {pathC}{dirC}
        </h4>
      </div>
    </section>
  )
}