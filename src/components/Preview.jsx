import PropTypes from 'prop-types'
import { useState } from "react"
import Modal from './Modal'


const Preview = ({ imgName, handleImageHover }) => {

    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)


        console.log('in preview', showModal);
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
            {showModal && <Modal onClose={handleModal} />}
        </>


    )
}

Preview.propTypes = {
    imgName: PropTypes.string.isRequired,
    handleImageHover: PropTypes.func.isRequired
}

export default Preview
