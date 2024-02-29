import { useState } from "react"

// import productOne from '../../public/images/image-product-1.jpg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (
        <div >
            {isMenuOpen && <div className="overlay-header" />}

            <section className={`header__container `}>

                {isMenuOpen && (
                    <div className="menu-nav">
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

                <div className="cart-details">
                    <h4>Cart</h4>

                    <hr />

                    <div className="cart-details-info">

                        <div className="info-img">
                            <img src="../../public/images/image-product-1-thumbnail.jpg" alt="info-img" />
                        </div>

                        <div className="info-price">
                            <p className="title">Fall Limited Edition Sneakers</p>
                            <p className="price">$125.00 x <span className="qty-num">3</span> <span className="total">{`$${375.00}`}</span></p>
                        </div>

                        <img className="delete-icon" src="../../public/images/icon-delete.svg" />
                    </div>

                    <button className="cart-cta">Checkout</button>
                </div>

                <div className="header__container-wrapper">
                    <div className="header__container-leftSide">
                        <img
                            className="menu-btn"
                            src="../../public/images/icon-menu.svg" alt="menu-btn"
                            onClick={toggleMenu}
                        />




                        <img src="../../public/images/logo.svg" alt="logo" />

                        <nav className="navLinks">
                            <a href="#">Collections</a>
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>

                    <div className="header__container-rightSide">
                        <div className="item-no"><span>3</span></div>
                        <img className="cart-icon" src="../../public/images/icon-cart.svg" alt="cart" />

                        <img className="avatar" src="../../public/images/image-avatar.png" alt="avatar" />

                    </div>
                </div>


            </section>
            <hr />
        </div>

    )
}

export default Header
