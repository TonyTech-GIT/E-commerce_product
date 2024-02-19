import { useState } from "react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (
        <div className={`${isMenuOpen && 'overlay'} `}>

            <section className={`header__container `}>
                <div className="header__container-leftSide">
                    <img
                        className="menu-btn"
                        src="../../public/images/icon-menu.svg" alt="menu-btn"
                        onClick={toggleMenu}
                    />

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
                    <img src="../../public/images/icon-cart.svg" alt="cart" />

                    <img className="avatar" src="../../public/images/image-avatar.png" alt="avatar" />

                </div>


            </section>
            <hr />
        </div>

    )
}

export default Header
