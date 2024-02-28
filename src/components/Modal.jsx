import PropTypes from 'prop-types'


import ModalPreview from "./ModalPreview"

import productOne from '../../public/images/image-product-1.jpg';
import productTwo from '../../public/images/image-product-2.jpg';
import productThree from '../../public/images/image-product-3.jpg';
import productFour from '../../public/images/image-product-4.jpg';

import previewOne from '../../public/images/image-product-1-thumbnail.jpg';
import previewTwo from '../../public/images/image-product-2-thumbnail.jpg';
import previewThree from '../../public/images/image-product-3-thumbnail.jpg';
import previewFour from '../../public/images/image-product-4-thumbnail.jpg';

import { useEffect, useState } from "react";

const modalPrevImg = [
    { modalImg: previewOne },
    { modalImg: previewTwo },
    { modalImg: previewThree },
    { modalImg: previewFour }
]

const Modal = ({ onClose, selectedImage }) => {

    const [selectedPrevModal, setSelectedPrevModal] = useState(null)


    const handleCloseModal = () => {

        return onClose();

    }

    useEffect(() => {
        console.log('jbhbbj', selectedPrevModal);

    })


    const handlePreviewImg = (previewImg) => {

        switch (previewImg) {
            case previewOne:
                setSelectedPrevModal(productOne)
                break;
            case previewTwo:
                setSelectedPrevModal(productTwo)
                break;
            case previewThree:
                setSelectedPrevModal(productThree)
                break;
            case previewFour:
                setSelectedPrevModal(productFour)
                break;

            default:
                break;
        }
    }



    return (
        <main className="firstModal">
            <img
                className="firstModalClose"
                src="../../public/images/icon-close.svg" alt="close"

                onClick={handleCloseModal}
            />
            <img className="product-img" src={selectedPrevModal ? selectedPrevModal : selectedImage} alt="product-1" />

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
    onClose: PropTypes.func.isRequired,
    selectedImage: PropTypes.string

}

export default Modal
