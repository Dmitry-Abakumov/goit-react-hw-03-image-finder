import { Component } from 'react';

import Modal from 'shared/compponenets/Modal/Modal';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = e => {
    this.setState({ showModal: true });
    console.log('Снова открыли');
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ showModal: false });
      console.log('Закрыли');
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
          <Modal
            largeImage={largeImage}
            tags={tags}
            onCloseModal={this.closeModal}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
