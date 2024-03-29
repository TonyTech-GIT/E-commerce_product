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

import prevIcon from "../../public/images/icon-previous.svg"
import nextIcon from "../../public/images/icon-next.svg"


import { useEffect, useState } from "react";

const modalPrevImg = [
    { modalImg: previewOne },
    { modalImg: previewTwo },
    { modalImg: previewThree },
    { modalImg: previewFour }
]

const Modal = ({ onClose, selectedImage, setModalImage }) => {

    const [selectedPrevModal, setSelectedPrevModal] = useState(null)


    const handleCloseModal = () => {

        return onClose();

    }

    const modalImgToProduct = () => {

        onClose()

        console.log('modal image', selectedPrevModal);

        setModalImage(selectedPrevModal)
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

    const imgData = [
        { imgName: previewOne, product: productOne },
        { imgName: previewTwo, product: productTwo },
        { imgName: previewThree, product: productThree },
        { imgName: previewFour, product: productFour }
    ]

    const handleModalNextImage = () => {
        const currentIndex = imgData.findIndex(img => img.product === selectedPrevModal);
        const nextIndex = (currentIndex + 1) % imgData.length;
        setSelectedPrevModal(imgData[nextIndex].product);
    }

    const handleModalPreviousImage = () => {
        const currentIndex = imgData.findIndex(img => img.product === selectedPrevModal);
        const previousIndex = (currentIndex - 1 + imgData.length) % imgData.length;
        setSelectedPrevModal(imgData[previousIndex].product);
    }



    return (
        <main className="firstModal">
            <img
                className="firstModalClose"
                src="../../public/images/icon-close.svg" alt="close"

                onClick={handleCloseModal}
            />

            <img
                className="next-icon-modal"
                src={nextIcon} alt="next"
                onClick={handleModalNextImage}
            />

            <img className="product-img" src={selectedPrevModal ? selectedPrevModal : selectedImage} alt="product-1" />

            <img
                className="previous-icon-modal"
                src={prevIcon} alt="previous"
                onClick={handleModalPreviousImage}
            />

            <div className="modal-preview">
                {modalPrevImg.map((modalPrevOne, index) => (
                    <ModalPreview
                        key={index}
                        {...modalPrevOne}

                        handlePreviewImg={handlePreviewImg}
                        testModalClose={modalImgToProduct}

                    />
                ))}

            </div>


        </main>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    selectedImage: PropTypes.string,
    setModalImage: PropTypes.func

}

export default Modal
