import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

  return (
    <>
        {products.map((product, i) => <Item key={i} product={product}/>)}
    </>
  )
}

export default ItemList