import PropTypes from 'prop-types';


const ModalPreview = ({ modalImg, handlePrevImg }) => {
    return (
        <div className='modal-preview-img'>
            <img
                src={modalImg}
                alt={modalImg}

                onMouseEnter={() => handlePrevImg(modalImg)}
            />
        </div>
    )
}


ModalPreview.propTypes = {
    modalImg: PropTypes.string.isRequired,
    handlePrevImg: PropTypes.string.isRequired
}
export default ModalPreview
