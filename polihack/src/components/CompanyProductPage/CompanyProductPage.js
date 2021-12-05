import React, {useState, UseEffect, useEffect} from "react"
import "./CompanyProductPage.css"

export default function CompanyProductPage({id, name, img}) {
    const [productList, setProductList] = useState([])
    useEffect(()=> {
        fetch("http://localhost:8000/api/products/")
        .then(response => response.json())
        .then(data => setProductList(data.filter((el)=> el.company == id)))
        .catch(err => alert(err));
    }, [])
    return <div className="company-product-page">
        <div className="company-product-sidebar"></div>
        <img className="company-product-page-img" src={img} />
        <p className="company-product-page-name">{name}</p>
        <div className="company-products">
            {productList.map((product, idx) => <div className="product-item" key={idx}>
                <p className="product-name">{product.name}</p>
                <p className="product-quantity">{product.quantity}</p>
                <p className="product-price">{product.price + " RON"}</p>
            </div>)}
        </div>
    </div>
}