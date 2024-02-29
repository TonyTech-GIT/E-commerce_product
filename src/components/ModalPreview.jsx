import PropTypes from 'prop-types';


const ModalPreview = ({ modalImg, handlePreviewImg, testModalClose }) => {
    return (
        <div className='modal-preview-img'>
            <img
                src={modalImg}
                alt={modalImg}
                onClick={() => testModalClose()}
                onMouseEnter={() => handlePreviewImg(modalImg)}
            />
        </div>
    )
}


ModalPreview.propTypes = {
    modalImg: PropTypes.string.isRequired,
    handlePreviewImg: PropTypes.func.isRequired,
    testModalClose: PropTypes.func
}
export default ModalPreview
