import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;
