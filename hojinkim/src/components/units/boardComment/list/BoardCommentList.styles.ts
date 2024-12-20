import styled from "@emotion/styled";
import {Modal, Rate} from "antd"
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WriterWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Update = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Delete = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Date = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;
export const Star = styled(Rate)``;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;