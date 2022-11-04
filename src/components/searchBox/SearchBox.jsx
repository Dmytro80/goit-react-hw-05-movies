import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  Error,
} from './SearchBox.styled';

const initialValues = {
  query: '',
};

const schema = Yup.object().shape({
  query: Yup.string()
    .trim()
    .min(1, 'Enter query!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Search query may contain only letters, apostrophe, dash and spaces.'
    ),
});

const SearchBox = ({ onSubmitForm }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    const normalizedQuery = query.trim();

    onSubmitForm(normalizedQuery);

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ isSubmitting }) => {
        return (
          <SearchForm>
            <SearchFormInput
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
            <SearchFormButton type="submit" disabled={isSubmitting}>
              Search
            </SearchFormButton>

            <Error name="query" component="span" />
          </SearchForm>
        );
      }}
    </Formik>
  );
};
export default SearchBox;
