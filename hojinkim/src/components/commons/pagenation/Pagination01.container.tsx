import { MouseEvent, useState } from "react";
import Pagination01UI from "./Pagination01.presenter";
import { IPaginations01Props } from "./Pagination01.types";

export default function Pagination01(props: IPaginations01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) setStartPage(startPage + 10);
    setActivedPage(startPage + 10);
    void props.refetch({ page: startPage + 10 });
  };

  return (
    <Pagination01UI
      startPage={startPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      activedPage={activedPage}
      lastPage={lastPage}
    />
  );
}
