import React from 'react'
import { Link } from 'react-router-dom';
const Item = ({ product }) => {
    return (
        <Link to={`/detail/${product.id}`}>
            <div style={{ boxShadow: '0 0 0 1px gray' }}>
                <h5>{product.title}</h5>
                <p>{product.category}</p>
            </div>
        </Link>
    )
}

export default Item