import PropTypes from 'prop-types'
// import { useState } from 'react'



const Preview = ({ id, imgName, handleImageHover, imgClick, isActive, onClick }) => {


    const handleImageClick = () => {

        console.log(isActive);

        onClick && onClick(id)

        imgClick && imgClick();

    }

    return (
        <div onClick={handleImageClick}>
            <div className={`product-preview-img ${isActive ? 'active' : ''}`} >
                <img
                    className={`${isActive ? 'active' : ''}`}
                    src={imgName}
                    alt={imgName}
                    onMouseEnter={() => {
                        handleImageHover(imgName)

                    }}
                    onMouseLeave={() => {
                        handleImageHover(imgName)

                    }}

                />
            </div>

        </div>


    )
}

Preview.propTypes = {
    id: PropTypes.number.isRequired,
    imgName: PropTypes.string.isRequired,
    handleImageHover: PropTypes.func.isRequired,
    imgClick: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}

export default Preview
