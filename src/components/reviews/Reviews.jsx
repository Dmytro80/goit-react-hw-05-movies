import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api/Api';
import {
  ListReviews,
  ItemReviews,
  TitleRewiews,
  Message,
} from './Reviews.styled';

const Reviews = () => {
  const [reviewsById, setReviewsById] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const paramsRequest = {
      movieId,
      controller,
    };

    async function fetchMovieReviews() {
      try {
        if (!movieId) {
          return;
        }
        const { results } = await getMovieReviews(paramsRequest);
        console.log('results in fetch', results);
        setReviewsById(results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieReviews();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!reviewsById) {
    return null;
  }
  console.log('reviewsById', reviewsById);
  return (
    <>
      {reviewsById.length !== 0 ? (
        <ListReviews>
          {reviewsById.map(({ author, content, id }) => (
            <ItemReviews key={id}>
              <TitleRewiews>Author: {author}</TitleRewiews>
              <p>{content}</p>
            </ItemReviews>
          ))}
        </ListReviews>
      ) : (
        <Message>We don`t have any reviews for this movie</Message>
      )}
    </>
  );
};

export default Reviews;
