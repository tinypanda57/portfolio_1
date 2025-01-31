import * as S from "./Pagination01.styles";
import { IPaginations01PropsUIProps } from "./Pagination01.types";
export default function Pagination01UI(props: IPaginations01PropsUIProps) {
  return (
    <div>
      <S.page onClick={props.onClickPrevPage}>{`<`}</S.page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.page
              onClick={props.onClickPage}
              key={props.startPage + index}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.page>
          )
      )}
      <S.page onClick={props.onClickNextPage}>{`>`}</S.page>
    </div>
  );
}
