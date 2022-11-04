import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 350px;
  height: 44px;
  font: inherit;
  font-size: 20px;
 border: 1px solid rgb(237, 236, 236);
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
  font: inherit;
  font-size: 18px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 56px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Error = styled(ErrorMessage)`
  display: inline-block;
  width: 100%;
  height: auto;
  color: red;
`;
