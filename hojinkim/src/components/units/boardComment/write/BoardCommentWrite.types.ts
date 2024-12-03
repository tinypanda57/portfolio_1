import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickWrite: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  writer: string;
  password: string;

  setStar: Dispatch<SetStateAction<number>>;
}
