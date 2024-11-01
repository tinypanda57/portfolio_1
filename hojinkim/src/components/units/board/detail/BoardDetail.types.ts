import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardEdit: () => void;
  onClickMoveToBoardList: () => void;
}
