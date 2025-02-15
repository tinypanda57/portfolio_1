import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit?: boolean;
  el?: IBoardComment;
}

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}
