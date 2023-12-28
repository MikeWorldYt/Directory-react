import './styles/Components.css'
import { DirContext } from '../context/directory'
import { useContext, useEffect } from 'react'
export default function Path( ) {
  const { pathA } = useContext( DirContext );

  return (
    <>
      <h3 className='path'>Root:/{pathA}</h3>
    </>
  )
}