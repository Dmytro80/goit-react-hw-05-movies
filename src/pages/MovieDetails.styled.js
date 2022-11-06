import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionMovieDetails = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color: orangered;
  }
`;

export const ImageWrapper = styled.div`
  width: 185px;
`;

export const TextWrapper = styled.div`
  margin-left: 15px;
  width: 850px;
`;

export const Text = styled.p`
  margin-top: 10px;
`;

export const OverviewTitle = styled.h2`
  margin-top: 15px;
`;
export const GenresTitle = styled.h3`
  margin-top: 15px;
`;

export const SectionAdditionalInformation = styled.section`
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const TitleAdditionalInformation = styled.h2`
  font-weight: 400;
  font-size: 16px;
`;
export const ListAdditionalInformation = styled.ul`
  margin-top: 15px;
  margin-left: 30px;
`;
export const ItemAdditionalInformation = styled.li`
  padding-top: 4px;
  padding-bottom: 4px;
`;
