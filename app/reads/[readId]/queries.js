import { gql } from '@apollo/client';

export const ARTICLE_QUERY = gql`
  query Article($id: ID) {
    article(where: { id: $id }) {
      author
      id
      metaTags
      name
      brief
      publishedAt
      content {
        html
      }
      gallery(first: 30) {
        url(
          transformation: {
            image: { resize: { fit: clip, height: 600, width: 970 } }
          }
        )
      }
      photo {
        url(
          transformation: {
            image: { resize: { fit: clip, height: 600, width: 970 } }
          }
        )
      }
    }
  }
`;