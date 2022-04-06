import React from 'react'
import QueenItem from './QueenItem'
import Spinner from '../ui/Spinner'

const QueenGrid = ({ items, isLoading }) => {
  return isLoading ? (
  <Spinner />
   ) : (
  <section className='cards'> 
  {items.map((item) => (
        <QueenItem key={item.char_id} item={item}></QueenItem>
      ))}
    </section>
  )
}

export default QueenGrid