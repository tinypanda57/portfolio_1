import { BoardCommentListUiProps } from "./BoardCommentList.types";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
export default function BoardCommentListUI(props: BoardCommentListUiProps) {
  return (
    <div>
    {props.isOpenDeleteModal && (
      <S.PasswordModal open={true} onOk={props.onClickDelete}>
        <div>pssword :</div>
        <S.PasswordInput type="password" onChange={props.onChangeDeletePassword}/>
      </S.PasswordModal>
      
    )}
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.WriterWrapper>
              <S.Writer>{el.writer}</S.Writer>
              <S.Star value={el.rating} disabled />
              <S.Contents>{el.contents}</S.Contents>
            </S.WriterWrapper>
            <S.OptionWrapper>
              <S.Update src="/images/boardComment/list/option_update_icon.png" />
              <S.Delete
                id={el._id}
                onClick={props.onClickOpenDeleteModal}
                src="/images/boardComment/list/option_delete_icon.png"
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.Date>{getDate(el?.createdAt)}</S.Date>
        </S.Wrapper>
      ))}
    </ div>
  );
}
