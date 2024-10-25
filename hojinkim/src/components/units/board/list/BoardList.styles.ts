import styled from "@emotion/styled";

export const Wraper = styled.div`
  width: 1200px;
  margin: 100px;
`;
export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;
export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;
export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Button = styled.button`
  width: 130px;
  height: 30px;
  margin-top: 30px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const PencilIcon = styled.img`
  width: 20px;
`;
