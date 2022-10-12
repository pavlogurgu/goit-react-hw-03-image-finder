import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from '../Styles';

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }
    componentDidMount() {
        window.addEventListener('keydown', this.escapeClick);
      }
      componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeClick);
      }
      escapeClick = event => {
        if (this.state.showModal) {
          if (event.code === 'Escape') {
            this.toggleModal();
          }
        }
      };
      backdropClick = event => {
        if (this.state.showModal) {
          if (event.currentTarget === event.target) {
            this.toggleModal();
          }
        }
      };
      toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
      };
      render(){
        const { webformatURL, tags, largeImageURL } = this.props;
        const { showModal } = this.state;
        return(
            <ImageGalleryItemLi>
                <ImageGalleryItemImage src={webformatURL}
                alt = {tags}
                onClick ={this.toggleModal} 
                />
                {showModal && (
                    <Modal
                    largeImageURL = {largeImageURL}
                    tags = {tags}
                    backdropClick={this.backdropClick}
                    />

                )}

            </ImageGalleryItemLi>
        )
      }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}