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

const Modal = () => {

    const [selectedPrevModal, setSelectedPrevModal] = useState(null)

    const handlePrevImg = (prevImg) => {
        setSelectedPrevModal(prevImg)
    }
    return (
        <main className="firstModal">
            <img className="product-img" src={selectedPrevModal || "../../public/images/image-product-1.jpg"} alt="product-1" />

            <div className="modal-preview">
                {modalPrevImg.map((modalPrevOne, index) => (
                    <ModalPreview
                        key={index}
                        {...modalPrevOne}

                        handlePrevImg={handlePrevImg}
                    />
                ))}

            </div>


        </main>
    )
}

export default Modal
