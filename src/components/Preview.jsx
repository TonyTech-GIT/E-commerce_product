import PropTypes from 'prop-types'
import { useState } from "react"


const Preview = ({ imgName, setModalFunction, handleImageHover }) => {

    const [showModal, setShowModal] = useState(true)

    const handleModal = () => {
        setShowModal(!showModal)

        console.log('in preview', showModal);

        setModalFunction(showModal)

    }

    return (
        <div className="product-preview-img">
            <img
                src={imgName}
                alt={imgName}
                onClick={handleModal}
                onMouseEnter={() => {
                    handleImageHover(imgName)

                }}
                onMouseLeave={() => {
                    handleImageHover(imgName)

                }}
            />
        </div>

    )
}

Preview.propTypes = {
    imgName: PropTypes.string.isRequired,
    setModalFunction: PropTypes.func.isRequired,
    handleImageHover: PropTypes.string.isRequired
}

export default Preview
