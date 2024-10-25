import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("password");
    try {
      if (!(event.target instanceof HTMLImageElement)) {
        alert("system error");
        return;
      }
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
