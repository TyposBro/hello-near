import exp from "constants";
import styled from "styled-components";
import {Star} from '@styled-icons/material';


export const PostCard= styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;

  background-color: white;
  padding: 10px 10px;
  border-radius: 8px;
`;
export const Avatar = styled.div`
  flex: 0.5;
  justify-content: center;
`;
export const Job = styled.div`
  flex: 1;
  justify-content: center;
`;

export const Company = styled.div`
  flex: 1;
  justify-content: center;
`;
export const Months = styled.div`
  flex: 1;
  justify-content: center;
`;
export const Rating = styled.div`
  flex: 1;
  justify-content: center;
`;

export const StarIcon = styled(Star)`
  width: 20px;
  height: 20px;
  color: yellow;
`;
