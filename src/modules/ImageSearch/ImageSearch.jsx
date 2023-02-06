import { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'shared/compponenets/Button/Button';

import { searchImages } from 'shared/services/image-search-api';

import 'react-toastify/dist/ReactToastify.css';
import css from './ImageSearch.module.css';

class ImageSearch extends Component {
  state = {
    images: [],
    pictureRequest: '',
    status: 'idle',
    error: null,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { pictureRequest, page } = this.state;

    if (
      prevState.pictureRequest !== pictureRequest ||
      prevState.page !== page
    ) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { pictureRequest, page } = this.state;

    try {
      this.setState({ status: 'pending' });
      const data = await searchImages(pictureRequest, page);
      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error, status: 'rejected' });
    } finally {
      this.setState({ status: 'resolved' });
    }
  }

  getFormState = pictureRequest => {
    if (this.state.pictureRequest === pictureRequest)
      return toast.warn(
        'You are already looking such a request now. Please, enter another',
        { position: toast.POSITION.TOP_RIGHT }
      );

    this.setState({ pictureRequest, page: 1, images: [] });
  };

  onLoadMoreBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status, error } = this.state;

    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.getFormState} />

        {images.length > 0 && <ImageGallery images={images} />}

        <div className={css.wrapper}>
          {status === 'resolved' && images.length > 0 && (
            <Button onClick={this.onLoadMoreBtnClick}>Load more</Button>
          )}

          {status === 'pending' && (
            <RotatingLines strokeColor="#3f51b5" width="50" />
          )}
        </div>

        {status === 'rejected' &&
          toast.error(error, {
            position: toast.POSITION.TOP_RIGHT,
          })}
      </div>
    );
  }
}

export default ImageSearch;
