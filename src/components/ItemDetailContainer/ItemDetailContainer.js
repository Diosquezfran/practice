import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const {id} = useParams();
    const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(data => {
               setProduct({...data, stock: 4})
            })
    }

    useEffect(() => {
        getProducts()
    },[])


    return (
        <div>
            {product.title}
        </div>
    )
}

export default ItemDetailContainer