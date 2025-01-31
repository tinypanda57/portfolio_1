import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <>
          <span>Comment </span>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
        </>
      )}
      <S.InputWrapper>
        <S.Input
          placeholder="wrtier"
          onChange={props.onChangeWriter}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={props.isEdit}
        />
        <S.Input
          type="password"
          placeholder="password"
          onChange={props.onChangePassword}
          value={props.password}
        />
        <S.Star onChange={props.setStar} />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          placeholder="text"
          onChange={props.onChangeContents}
          value={
            props.contents !== "" ? props.contents : props.el?.contents ?? ""
          }
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {props.contents !== ""
              ? props.contents.length
              : props.el?.contents.length ?? 0}
            /100
          </S.ContentsLength>
          <S.Button
            onClick={
              props.isEdit === true ? props.onClickUpdate : props.onClickWrite
            }
          >
            Submit
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
