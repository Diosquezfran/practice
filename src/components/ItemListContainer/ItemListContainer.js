import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    // Captura el parámentro que llega por URL definido en la ruta
    const { categoryID } = useParams();

    // Función para traer los datos de una api, setea en base a si existe o no un categoryID
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then(data => {
                if (categoryID) {
                    // En caso de que exista un categoryID filtra dejando solo aquellos que poseen esa categoría
                    setProducts(data.filter((p) => p.category === categoryID))
                } else {
                    // En caso de que NO exista un categoryID guarda todos los datos que vienen de la api
                    setProducts(data)
                }
            })
    }

    // El useEffect esta atento a categoryID, se ejecuta la primera vez y cada vez que cambie el valor de categoryID
    useEffect(() => {
        getProducts()
    }, [categoryID])

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
};

export default ItemListContainer