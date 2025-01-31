import { getDate } from "../../../../commons/libraries/utils";
import Pagination01 from "../../../commons/pagenation/Pagination01.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wraper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>No.</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>Title</S.ColumnHeaderTitle>

        <S.ColumnHeaderBasic>Writer</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>Date</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Pagination01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          Post!!
        </S.Button>
      </S.Footer>
    </S.Wraper>
  );
}
