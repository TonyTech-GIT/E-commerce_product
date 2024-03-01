// import PropTypes from 'prop-types'

/* eslint-disable no-unused-vars */

import Preview from "./Preview";
import Modal from './Modal'


import productOne from '../../public/images/image-product-1.jpg';
import productTwo from '../../public/images/image-product-2.jpg';
import productThree from '../../public/images/image-product-3.jpg';
import productFour from '../../public/images/image-product-4.jpg';

import thumbOne from '../../public/images/image-product-1-thumbnail.jpg';
import thumbTwo from '../../public/images/image-product-2-thumbnail.jpg';
import thumbThree from '../../public/images/image-product-3-thumbnail.jpg';
import thumbFour from '../../public/images/image-product-4-thumbnail.jpg';


import React, { useEffect, useState, useContext } from "react";
import { QuantityContext } from './QuantityContext';


const Product = () => {

    const [hoveredImage, setHoveredImage] = useState(productOne)
    const [selectedImage, setSelectedImage] = useState(null)
    const { quantity, setQuantity } = useContext(QuantityContext)
    const [showModal, setShowModal] = useState(false)
    const [selectedModalImage, setSelectedModalImage] = useState(null)

    useEffect(() => {
        console.log('yyyyy', selectedModalImage);

        console.log('fdddfdf', hoveredImage);

    },)

    const handleModal = () => {
        setShowModal(!showModal)

        setSelectedImage(hoveredImage)

    }

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
        { imgName: thumbOne, product: productOne },
        { imgName: thumbTwo, product: productTwo },
        { imgName: thumbThree, product: productThree },
        { imgName: thumbFour, product: productFour }
    ]

    const handleNextImage = () => {
        const currentIndex = imgData.findIndex(img => img.product === hoveredImage);
        const nextIndex = (currentIndex + 1) % imgData.length;
        setHoveredImage(imgData[nextIndex].product);
    }

    const handlePreviousImage = () => {
        const currentIndex = imgData.findIndex(img => img.product === hoveredImage);
        const previousIndex = (currentIndex - 1 + imgData.length) % imgData.length;
        setHoveredImage(imgData[previousIndex].product);
    }

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }
    const handleDecrement = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0))
    }



    return (

        <section className="product__container">

            <div className="product__container-img">
                <img
                    className="next-icon"
                    src="../../public/images/icon-next.svg" alt="next"
                    onClick={handleNextImage}
                />

                <img
                    className="product-img"
                    src={hoveredImage ? hoveredImage : selectedModalImage}
                    alt={hoveredImage}
                />

                <img
                    className="previous-icon"
                    src="../../public/images/icon-previous.svg" alt="previous"
                    onClick={handlePreviousImage}
                />

                <div className="product-preview">

                    <Preview
                        handleImageHover={handleImageHover}
                        imgName={productOne}
                        imgClick={handleModal}
                    />

                    <Preview
                        handleImageHover={handleImageHover}
                        imgName={productTwo}
                        imgClick={handleModal}
                    />

                    <Preview
                        handleImageHover={handleImageHover}
                        imgName={productThree}
                        imgClick={handleModal}
                    />

                    <Preview
                        handleImageHover={handleImageHover}
                        imgName={productFour}
                        imgClick={handleModal}
                    />

                    {/* {imgData.map((img, index) => (
                        <Preview
                            key={index}
                            {...img}

                            handleImageHover={handleImageHover}
                            imgClick={() => handleImgClick(img.imgName)}
                        />
                    ))} */}


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



            {showModal && <div className='overlay' />}
            {showModal && <Modal selectedImage={selectedImage} onClose={handleModal} setModalImage={setSelectedModalImage} />}

        </section>
    )
}

// Product.propTypes = {
//     setQuantityNumber: PropTypes.func
// }



export default Product
