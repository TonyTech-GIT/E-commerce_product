import PropTypes from 'prop-types'



const Preview = ({ imgName, handleImageHover, imgClick }) => {
    const handleModal = () => {
        imgClick()
    }

    return (
        <>
            <div className="product-preview-img">
                <img
                    src={imgName}
                    alt={imgName}
                    onMouseEnter={() => {
                        handleImageHover(imgName)

                    }}
                    onMouseLeave={() => {
                        handleImageHover(imgName)

                    }}
                    onClick={handleModal}
                />
            </div>

        </>


    )
}

Preview.propTypes = {
    imgName: PropTypes.string.isRequired,
    handleImageHover: PropTypes.func.isRequired,
    imgClick: PropTypes.func
}

export default Preview
