import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  > nav {
    display: flex;
    gap: 16px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;

  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: orangered;
  }

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
