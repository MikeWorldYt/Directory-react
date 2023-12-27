import { useEffect, useState } from 'react';
import './styles/Components.css'

export default function Path( { text }  ) {


  return (
    <>
      <h3 className='path'>Root/{text}</h3>
    </>
  )
}