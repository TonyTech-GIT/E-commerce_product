import { useContext, useState, useEffect } from "react"

// import productOne from '../../public/images/image-product-1.jpg'

import projectLogo from '../../public/images/logo.svg';
import cart from '../../public/images/icon-cart.svg';
import deleteIcon from '../../public/images/icon-delete.svg';
import thumbOne from '../../public/images/image-product-1-thumbnail.jpg'

import { QuantityContext } from "./QuantityContext"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [cartDetails, setCartDetails] = useState(false)

    const { quantity } = useContext(QuantityContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const handleCartDetails = () => {
        setCartDetails(!cartDetails)
    }

    useEffect(() => {
        console.log('in header compo', quantity);
    })
    return (
        <div >
            {isMenuOpen && <div className="overlay-header" />}

            <section className={`header__container `}>

                {isMenuOpen && (
                    <div className="menu-nav ">
                        <div className="close-btn">
                            <img
                                src="../../public/images/icon-close.svg"
                                alt="close-btn"
                                onClick={closeMenu}
                            />
                        </div>

                        <a href="#">Collections</a>
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                )}

                {/* CART DETAILS COMPONENT STARTS... */}
                {cartDetails && (
                    <div className="cart-details">
                        <h4>Cart</h4>

                        <hr />

                        {quantity === 0 ? (
                            <p className="no-item">Your cart is empty.</p>
                        ) : (
                            <>
                                <div className="cart-details-info">

                                    <div className="info-img">
                                        <img src={thumbOne} alt="info-img" />
                                    </div>

                                    <div className="info-price">
                                        <p className="title">Fall Limited Edition Sneakers</p>
                                        <p className="price">$125.00 x <span className="qty-num">{quantity}</span> <span className="total">{`$${quantity * 125.00}`}</span></p>
                                    </div>

                                    <img className="delete-icon" src={deleteIcon} alt="delete-icon" />
                                </div>

                                <button className="cart-cta">Checkout</button>
                            </>

                        )}



                    </div>
                )}

                {/* CART DETAILS COMPONENT ENDS... */}

                <div className="header__container-wrapper">
                    <div className="header__container-leftSide">
                        <img
                            className="menu-btn"
                            src="../../public/images/icon-menu.svg" alt="menu-btn"
                            onClick={toggleMenu}
                        />

                        <img src={projectLogo} alt="logo" />

                        <nav className="navLinks">
                            <a href="#">Collections</a>
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>

                    <div className="header__container-rightSide">
                        {quantity >= 1 && <div className="item-no"><span>{quantity ? quantity : ''}</span></div>}


                        <img
                            className="cart-icon"
                            src={cart}
                            alt="cart"
                            onClick={handleCartDetails}
                        />

                        <img className="avatar" src="../../public/images/image-avatar.png" alt="avatar" />

                    </div>
                </div>


            </section>
            <hr />
        </div>

    )
}

export default Header
