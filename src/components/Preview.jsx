import PropTypes from 'prop-types'
import { useState } from "react"
import Modal from './Modal'





const Preview = ({ imgName, handleImageHover, imgClick }) => {

    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleModal = () => {
        setShowModal(!showModal)

        setSelectedImage(selectedImage)
        console.log('in preview', showModal);

        console.log(imgName);

        console.log('jbsujbsdu', imgClick());
    }

    return (
        <>
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
            {showModal && <div className='overlay' />}
            {showModal && <Modal selectedImage={imgName} onClose={handleModal} />}
        </>


    )
}

Preview.propTypes = {
    imgName: PropTypes.string.isRequired,
    handleImageHover: PropTypes.func.isRequired,
    imgClick: PropTypes.func
}

export default Preview
