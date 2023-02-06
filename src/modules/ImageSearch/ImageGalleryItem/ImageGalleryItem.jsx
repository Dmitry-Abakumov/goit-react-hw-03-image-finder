import { Component } from 'react';

import Modal from 'shared/compponenets/Modal/Modal';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = e => {
    this.setState({ showModal: true });
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { showModal } = this.state;
    const { smallImage, tags, largeImage } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.openModal}
          className={css.ImageGalleryItemImage}
          src={smallImage}
          alt={tags}
        />
        {showModal && (
          <Modal onCloseModal={this.closeModal}>
            <img src={largeImage} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
