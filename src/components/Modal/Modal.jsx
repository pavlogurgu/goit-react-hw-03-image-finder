import PropTypes from 'prop-types'
import { Overlay, ModalDiv } from '../Styles';

export const Modal = ({tags, largeImageURL, backdropClick}) => {
    return(
        <Overlay onClick={backdropClick}>
            <ModalDiv>
                <img src={largeImageURL}
                alt = {tags} />
            </ModalDiv>
        </Overlay>
    )
}
Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    largeIngURL: PropTypes.string.isRequired,
    backdropClick: PropTypes.func.isRequired,
}