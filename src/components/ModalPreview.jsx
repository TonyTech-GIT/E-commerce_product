import PropTypes from 'prop-types';


const ModalPreview = ({ modalImg, handlePreviewImg }) => {
    return (
        <div className='modal-preview-img'>
            <img
                src={modalImg}
                alt={modalImg}

                onMouseEnter={() => handlePreviewImg(modalImg)}
            />
        </div>
    )
}


ModalPreview.propTypes = {
    modalImg: PropTypes.string.isRequired,
    handlePreviewImg: PropTypes.func.isRequired
}
export default ModalPreview
