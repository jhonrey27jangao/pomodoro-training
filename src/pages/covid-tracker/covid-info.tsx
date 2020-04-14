import React from "react";
import {useSelector} from 'react-redux'
import { DashBoardContainer, Item } from "./styles";

const CovidInfo: React.FC = () => {
  const cases = useSelector((state:any) => state.cases)
  return (
    <DashBoardContainer>
      <Item>{cases}</Item>
      <Item></Item>
      <Item></Item>
    </DashBoardContainer>
  );
};

export default CovidInfo;
