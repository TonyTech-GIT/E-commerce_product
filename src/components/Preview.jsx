import PropTypes from 'prop-types'
import { useState } from "react"


const Preview = ({ imgName, setModalFunction }) => {

    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    setModalFunction(showModal)
    return (
        <div className={`product-preview-img ${showModal && 'overlay'}`}>
            <img
                src={imgName}
                alt={imgName}
                onClick={handleModal}
            />
        </div>

    )
}

Preview.propTypes = {
    imgName: PropTypes.string.isRequired,
    setModalFunction: PropTypes.func.isRequired
}

export default Preview
