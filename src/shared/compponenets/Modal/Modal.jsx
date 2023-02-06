import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    const { onCloseModal } = this.props;
    document.addEventListener('keydown', onCloseModal);
  }

  componentWillUnmount() {
    const { onCloseModal } = this.props;
    document.removeEventListener('keydown', onCloseModal);
  }

  render() {
    const { largeImage, tags, onCloseModal } = this.props;

    return createPortal(
      <div onClick={onCloseModal} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={largeImage} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
