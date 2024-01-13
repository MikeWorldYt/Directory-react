import { useContext } from 'react'
import { DirContext } from '../../../context/directory'
import '../../styles/Components.css'

export default function Head() {
  const { pathA, pathB, pathC } = useContext( DirContext );

  return (
    <section id='head'>
      <div className='container'>
        <h4 className='path'>Root:/{pathA}{pathB}{pathC}</h4>
      </div>
    </section>
  )
}