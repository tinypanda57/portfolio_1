import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardCommentListUiProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpenDeleteModal: boolean;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
