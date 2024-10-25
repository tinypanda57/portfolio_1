import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px;
  border: none;
  box-shadow: 0px 0px 10px grey;
  border-radius: 5px;
  padding: 50px 80px;
`;
export const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
  margin: 20px;
`;
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Lable = styled.div`
  margin-top: 10px;
  font-weight: 600;
  padding-bottom: 10px;
  font-sizes: 16px;
`;
export const InputWrapper = styled.div`
  padding-top: 30px;
`;

export const Writer = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
export const Password = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export const Titles = styled.input`
  width: 690px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export const Contents = styled.textarea`
  width: 690px;
  height: 300px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-top: 10px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Zipcode = styled.input`
  width: 100px;
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 5px;
`;
export const SearchButton = styled.button`
  width: 70px;
  background: black;
  color: white;
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  cursor: pointer;
`;
export const Adress = styled.input`
  width: 690px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export const Youtube = styled.input`
  width: 690px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
export const ImageWrapper = styled.div`
  width: 690px;
  margin-top: 30px;
`;

export const UploadButton = styled.button`
  width: 50px;
  height: 50px;
  backgorund-color: #bdbdbd;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

export const OptionWrapper = styled.div`
  width: 690px;
  margin-top: 30px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;
export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  font-weight: 600;
  border: none;

  font-size: 16px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : "none"};
`;

export const Error = styled.div`
  padding-left: 5px;
  font-size: 13px;
  color: red;
`;

export const State = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export const Country = styled.select`
  width: 140px;
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 5px;
`;

export const Details = styled.div`
  font-size: 13px;
  color: #bdbdbd;
`;

export const City = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
