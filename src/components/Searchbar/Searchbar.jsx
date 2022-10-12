import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { GoSearch } from 'react-icons/go';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from '../Styles';





export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <SearchbarHeader>
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
      <SearchForm>
        <SearchFormButton type="submit">
          <GoSearch size={24} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Formik>
  </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};