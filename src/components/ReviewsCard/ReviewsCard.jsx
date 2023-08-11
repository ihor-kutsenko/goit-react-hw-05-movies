import { Author, AuthorName, Content } from './ReviewsCard.styled';
const ReviewsCard = ({ author, content }) => {
  return (
    <>
      <Author>
        Author: <AuthorName>{author}</AuthorName>
      </Author>
      <Content>{content}</Content>
    </>
  );
};

export default ReviewsCard;
