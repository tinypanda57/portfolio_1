import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <span>Comment </span>
      <S.PencilIcon src="/images/boardComment/write/pencil.png" />

      <S.InputWrapper>
        <S.Input placeholder="wrtier" onChange={props.onChangeWriter} 
        value={props.writer}
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

          value={props.contents}
        />
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.Button onClick={props.onClickWrite}> Submit</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
