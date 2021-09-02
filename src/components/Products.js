import React, { useState } from 'react';
import style from './Products.module.css'
import {postProducts} from '../services/service'

const products = [
    { id: 1, name: "Short", price: 39.90, colors: ["red", "green", "blue", "yellow", 'orange'] },
    { id: 2, name: "T-Shirt", price: 19.90, colors: ["red",  "yellow"] },
    { id: 3, name: "Glasses", price: 23.90, colors: ["red", "green", "yellow"] },
    { id: 4, name: "Gloves", price: 24.90, colors: ["red", "green", "blue"] },
    { id: 5, name: "Trousers", price: 109.90, colors: ["red", "blue", "yellow"] },
    { id: 6, name: "Snickers", price: 339.90, colors: ["red", "green", "blue", "yellow"] },
];


const Products = (props) => {

    const [isOpen, setIsOpen] = useState(true);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    const productsAll = isOpen ? style.close : style.container;


    return (
        <div className={style.products}>
            <h1>Products store</h1>
            <button className={style.btn}  onClick={() => toggleOpen()}>Load Products</button>
            <div className={productsAll}>
                {productCard}
            </div>
            
        </div>
    );
}


const productCard = products.map(product => {
    return(
            <div key={product.id} className={style.card}>
                <h1 className={style.name}>{product.name}</h1>
                <p className={style.price}>Price: {product.price} $</p>
                <div className={style.colors}>
                    {product.colors.map(c => { return <div key={c} className={style.color} style={{backgroundColor: c}}></div> })}
                </div>
                <button 
                    className={style.btn}
                    onClick={() => {postProducts(product)}}
                >
                        POST
                </button>
            </div>
    )
    
});





export default Products;