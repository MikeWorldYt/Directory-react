import { useContext } from 'react'
import { DirContext } from '../../../context/directory'
import '../../styles/Components.css'
export default function Path( ) {
  const { pathA, pathB, pathC } = useContext( DirContext );

  return (
    <>
      <h4 className='path'>Root:/{pathA}{pathB}{pathC}</h4>
    </>
  )
}