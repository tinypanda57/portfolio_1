import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIItem } from "./BoardCommentList.types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItem
): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>
  ): void => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal open={true} onOk={onClickDelete}>
          <div>password :</div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.Wrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.WriterWrapper>
              <S.Writer>{props.el.writer}</S.Writer>
              <S.Star value={props.el.rating} disabled />
              <S.Contents>{props.el.contents}</S.Contents>
            </S.WriterWrapper>
            <S.OptionWrapper>
              <S.Update
                src="/images/boardComment/list/option_update_icon.png"
                onClick={onClickUpdate}
              />
              <S.Delete
                id={props.el._id}
                onClick={onClickOpenDeleteModal}
                src="/images/boardComment/list/option_delete_icon.png"
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.Date>{getDate(props.el?.createdAt)}</S.Date>
        </S.Wrapper>
      ) : (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
