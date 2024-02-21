import Preview from "./Preview";

import thumbOne from '../../public/images/image-product-1-thumbnail.jpg';
import thumbTwo from '../../public/images/image-product-2-thumbnail.jpg';
import thumbThree from '../../public/images/image-product-3-thumbnail.jpg';
import thumbFour from '../../public/images/image-product-4-thumbnail.jpg';


const Product = () => {

    const imgData = [
        { imgName: thumbOne },
        { imgName: thumbTwo },
        { imgName: thumbThree },
        { imgName: thumbFour }
    ]




    return (
        <section className={`product__container `}>

            <div className="product__container-img">
                <img className="product-img" src="../../public/images/image-product-1.jpg" alt="product-1" />

                <div className="product-preview">

                    {imgData.map((img, index) => (
                        <Preview
                            key={index}
                            {...img}

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
                        <img className="minus" src="../../public/images/icon-minus.svg" alt="minus" />
                        <span>0</span>
                        <img className="add" src="../../public/images/icon-plus.svg" alt="plus" />
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
