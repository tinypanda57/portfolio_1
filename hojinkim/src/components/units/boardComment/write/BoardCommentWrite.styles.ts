import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;
export const PencilIcon = styled.img``;
export const InputWrapper = styled.div`
  margin-top: 20px;
`;
export const Input = styled.input`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid lightgrey;
`;
export const ContentsWrapper = styled.div`
  border: 1px solid lightgrey;
  margin-top: 20px;
`;
export const Contents = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgrey;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentsLength = styled.div`
  width: 100%;
  line-height: 50px;
  color: grey;
  padding-left: 20px;
`;
export const Button = styled.button`
  width: 60px;
  height: 50px;
  background: black;
  color: white;
  cursor: pointer;
`;

export const Star = styled(Rate)``;