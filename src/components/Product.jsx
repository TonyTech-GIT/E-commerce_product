
import Preview from "./Preview";

import productOne from '../../public/images/image-product-1.jpg';
import productTwo from '../../public/images/image-product-2.jpg';
import productThree from '../../public/images/image-product-3.jpg';
import productFour from '../../public/images/image-product-4.jpg';

import thumbOne from '../../public/images/image-product-1-thumbnail.jpg';
import thumbTwo from '../../public/images/image-product-2-thumbnail.jpg';
import thumbThree from '../../public/images/image-product-3-thumbnail.jpg';
import thumbFour from '../../public/images/image-product-4-thumbnail.jpg';


import { useState } from "react";


const Product = () => {

    const [hoveredImage, setHoveredImage] = useState(productOne)
    const [quantity, setQuantity] = useState(0)



    const handleImageHover = (imgName) => {
        setHoveredImage(imgName)

        switch (imgName) {
            case thumbOne:
                setHoveredImage(productOne)
                break;
            case thumbTwo:
                setHoveredImage(productTwo)
                break;
            case thumbThree:
                setHoveredImage(productThree)
                break;
            case thumbFour:
                setHoveredImage(productFour)
                break;

            default:
                break;
        }
    }

    const imgData = [
        { imgName: thumbOne },
        { imgName: thumbTwo },
        { imgName: thumbThree },
        { imgName: thumbFour }
    ]

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }
    const handleDecrement = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0))
    }



    return (

        <section className="product__container">

            <div className="product__container-img">
                <img className="next-icon" src="../../public/images/icon-next.svg" alt="next" />
                <img className="product-img" src={hoveredImage} alt={hoveredImage} />

                <img className="previous-icon" src="../../public/images/icon-previous.svg" alt="previous" />

                <div className="product-preview">

                    {imgData.map((img, index) => (
                        <Preview
                            key={index}
                            {...img}

                            handleImageHover={handleImageHover}
                        />
                    ))}


                </div>
            </div>

            <div className="product__container-desc">
                <span className="brand">SNEAKER COMPANY</span>
                <h2 className="title">Fall Limited Edition Sneakers</h2>
                <p className="description">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a double rubber outer sole, they&apos;ll withstand anything the weather can offer.
                </p>

                <div className="price-details">
                    <div className="priceAndDiscount">
                        <span className="price">$125.00</span>
                        <div className="percentDiscount">50%</div>
                    </div>
                    <div className="priceDiscount">$250.00</div>

                </div>

                <div className="inventory">
                    <div className="items">
                        <img
                            className="minus"
                            src="../../public/images/icon-minus.svg"
                            alt="minus"
                            onClick={handleDecrement}
                        />

                        <span>{quantity}</span>

                        <img
                            className="add"
                            src="../../public/images/icon-plus.svg"
                            alt="plus"
                            onClick={handleIncrement}
                        />
                    </div>

                    <div className="cta">
                        <img src="../../public/images/icon-cart.svg" alt="cart" />
                        <span>Add to cart</span>
                    </div>
                </div>
            </div>



        </section>
    )
}



export default Product
