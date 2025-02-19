import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
return (
    <div className='productdisplay'>
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img src={product.image} alt=""  className='productdisplay-main-img'/>
        </div>
    </div>
    <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(130)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
            ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            adakodjadaidada kjknqjdonqoinoqnjn oeiqj njnoqinoiqn onqoino nnqoiqo qnqnoiqnon qnqnqn qnonq
        </div>
        <div className="productdisplay-right-size">
            <h1>select size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
            <span>category :</span>women , T-shirt,croptop
        </p>
        <p className="productdisplay-right-category">
            <span>Tags :</span>Modern,latest
        </p>
    </div>
    </div>
)
}

export default ProductDisplay
