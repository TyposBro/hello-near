import styled from "styled-components";

export const _container = styled.div`
  width: 400px;
  height: 200px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  padding: 20px 30px;
  color: black;
`;
export const _row = styled.div`
  display: flex;
  flex-direction: column;
`;
export const _col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 120px; */
`;

export const _title = styled.div`
  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 42px;

  color: #000000;
`;
export const _subtitle = styled.div`
  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 39px;
  color: rgba(70, 65, 65, 0.6);
  margin-right: 20px;
`;
export const _span = styled.span`
  height: 100%;
  width: 100%;
  font-size: 30px;
`;
export const _avatar = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 1px solid black;
  padding: 10px;
`;
