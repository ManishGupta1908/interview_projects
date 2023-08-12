import styled from "styled-components";

const Menu = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
`;
const CutIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const MenuParent = styled.div`
  align-self: stretch;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const DashboardIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const DashboardParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #f2f8fe;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
`;
const NoteAltIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
const Assessment = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 600;
`;
const NoteAltParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  z-index: 0;
`;
const FrameChild = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 5px;
  left: 230px;
  border-radius: 10px;
  background-color: #d63500;
  width: 7px;
  height: 7px;
  opacity: 0;
  z-index: 1;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #e5f1fc;
  border: 1px solid #0073e6;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 10px;
  color: #0073e6;
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  text-align: left;
  font-size: 14px;
  color: #1c4980;
  font-family: Inter;
`;
const MyLibraryContainer = () => {
  return (
    <FrameParentRoot>
      <MenuParent>
        <Menu>Menu</Menu>
        <CutIcon alt="" src="/cut2.svg" />
      </MenuParent>
      <FrameWrapper>
        <DashboardParent>
          <DashboardIcon alt="" src="/dashboard.svg" />
          <Menu>Dashboard</Menu>
        </DashboardParent>
      </FrameWrapper>
      <FrameGroup>
        <NoteAltParent>
          <NoteAltIcon alt="" src="/note-alt.svg" />
          <Assessment>Assessment</Assessment>
        </NoteAltParent>
        <FrameChild />
      </FrameGroup>
      <FrameWrapper>
        <DashboardParent>
          <NoteAltIcon alt="" src="/quiz.svg" />
          <Menu>My Library</Menu>
        </DashboardParent>
      </FrameWrapper>
    </FrameParentRoot>
  );
};

export default MyLibraryContainer;
