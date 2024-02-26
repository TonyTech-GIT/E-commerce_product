import PropTypes from 'prop-types'


import ModalPreview from "./ModalPreview"

import prevOne from '../../public/images/image-product-1-thumbnail.jpg';
import prevTwo from '../../public/images/image-product-2-thumbnail.jpg';
import prevThree from '../../public/images/image-product-3-thumbnail.jpg';
import prevFour from '../../public/images/image-product-4-thumbnail.jpg';
import { useState } from "react";

const modalPrevImg = [
    { modalImg: prevOne },
    { modalImg: prevTwo },
    { modalImg: prevThree },
    { modalImg: prevFour }
]

const Modal = ({ onClose }) => {

    const [selectedPrevModal, setSelectedPrevModal] = useState(null)


    const handleCloseModal = () => {


        return onClose();

    }

    const handlePreviewImg = (previewImg) => {
        setSelectedPrevModal(previewImg)
    }

    return (
        <main className="firstModal">
            <img
                className="firstModalClose"
                src="../../public/images/icon-close.svg" alt="close"

                onClick={handleCloseModal}
            />
            <img className="product-img" src={selectedPrevModal || "../../public/images/image-product-1.jpg"} alt="product-1" />

            <div className="modal-preview">
                {modalPrevImg.map((modalPrevOne, index) => (
                    <ModalPreview
                        key={index}
                        {...modalPrevOne}

                        handlePreviewImg={handlePreviewImg}
                    />
                ))}

            </div>


        </main>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Modal
