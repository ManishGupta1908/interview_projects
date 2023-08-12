import styled from "styled-components";

const DashboardIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 0;
`;
const Dashboard = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
  z-index: 1;
`;
const FrameChild = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 5px;
  right: 5px;
  border-radius: 10px;
  background-color: #d63500;
  width: 7px;
  height: 7px;
  opacity: 0;
  z-index: 2;
`;
const DashboardParent = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 90px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 6px;
`;
const NoteAltIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  z-index: 0;
`;
const NoteAltParent = styled.div`
  border-radius: 8px;
  background-color: #e5f1fc;
  border: 1px solid #0073e6;
  box-sizing: border-box;
  width: 90px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 6px;
  color: #0073e6;
`;
const QuizIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
const MyLibrary = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
`;
const QuizParent = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 90px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
const FrameInner = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 90px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
`;
const BillAndPlanLineIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const BillAndPlanLineWrapper = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 90px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const FrameParentRoot = styled.div`
  height: 225px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 10px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2px;
  text-align: left;
  font-size: 12px;
  color: #1c4980;
  font-family: Inter;
`;
const LibraryContainer = () => {
  return (
    <FrameParentRoot>
      <DashboardParent>
        <DashboardIcon alt="" src="/dashboard1.svg" />
        <Dashboard>Dashboard</Dashboard>
        <FrameChild />
      </DashboardParent>
      <NoteAltParent>
        <NoteAltIcon alt="" src="/https://circumicons.com/icon/link" />
        <Dashboard>Assessment</Dashboard>
        <FrameChild />
      </NoteAltParent>
      <QuizParent>
        <QuizIcon alt="" src="/quiz1.svg" />
        <MyLibrary>My Library</MyLibrary>
      </QuizParent>
      <FrameInner />
      <FrameInner />
      <FrameInner />
      <BillAndPlanLineWrapper>
        <BillAndPlanLineIcon alt="" src="/check.svg" />
      </BillAndPlanLineWrapper>
    </FrameParentRoot>
  );
};

export default LibraryContainer;
