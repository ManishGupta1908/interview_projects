// import { Property } from "csstype";
import styled from "styled-components";

const Icon = styled.img`
  position: relative;
  width: 28.43px;
  height: 11.09px;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 15.5px;
  height: 9.78px;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 13.92px;
  height: 10.05px;
`;
const FrameChild = styled.img`
  position: relative;
  width: 22.5px;
  height: 10.26px;
`;
const Frame = styled.div`
  height: 11px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0px 1px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const StatusBarRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 374px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 7px 16px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  position: ${(p) => p.statusBarPosition};
`;
const StatusBar1 = ({
  vector,
  vector1,
  frame1000007851,
  statusBarPosition,
}) => {
  return (
    <StatusBarRoot statusBarPosition={statusBarPosition}>
      <Icon alt="" src="/941.svg" />
      <Frame>
        <VectorIcon alt="" src={vector} />
        <VectorIcon1 alt="" src={vector1} />
        <FrameChild alt="" src={frame1000007851} />
      </Frame>
    </StatusBarRoot>
  );
};

export default StatusBar1;
