import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  box-shadow: 0px 0px 10px grey;
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.img`
  margin-right: 15px;
`;
export const Info = styled.div``;
export const Writer = styled.div`
  margin-bottom: 5px;
`;
export const CreatedAt = styled.div``;
export const Body = styled.div``;
export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
`;
export const Contents = styled.div``;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;
export const Button = styled.button`
  width: 200px;
  height: 35px;
  font-size: 20px;
  font-weight: 600;
  background: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
