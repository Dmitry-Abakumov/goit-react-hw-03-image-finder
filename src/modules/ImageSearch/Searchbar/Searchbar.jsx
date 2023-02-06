import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    pictureRequest: '',
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { pictureRequest } = this.state;
    const { onSubmit } = this.props;

    onSubmit(pictureRequest);

    this.reset();
  };

  reset() {
    this.setState({ pictureRequest: '' });
  }

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { pictureRequest } = this.state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
          <button className={css.SearchFormButton} type="submit">
            <AiOutlineSearch size="2em" />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            onChange={this.onInputChange}
            name="pictureRequest"
            value={pictureRequest}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
