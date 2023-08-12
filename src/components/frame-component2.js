import MyLibraryContainer from "./my-library-container";
import styled from "styled-components";

const FrameChild = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 1px;
  flex-shrink: 0;
`;
const AdminMedsIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
const RoundStatus = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
`;
const AdminMedsParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const Admin = styled.div`
  position: relative;
  font-weight: 500;
`;
const AdminWrapper = styled.div`
  border-radius: 22px;
  background-color: #fbebea;
  border: 1px solid #d63500;
  box-sizing: border-box;
  height: 18px;
  display: flex;
  flex-direction: row;
  padding: 6px 8px;
  align-items: center;
  justify-content: flex-start;
  font-size: 10px;
  color: #d63500;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #f2f8fe;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParentRoot = styled.div`
  position: relative;
  background-color: #f2f8fe;
  width: 315px;
  height: 1074px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 10px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: 14px;
  color: #1c4980;
  font-family: Inter;
`;
const FrameComponent2 = ({ onClose }) => {
  return (
    <FrameParentRoot>
      <MyLibraryContainer />
      <FrameChild alt="" src="/vector-267.svg" />
      <FrameWrapper>
        <FrameGroup>
          <AdminMedsParent>
            <AdminMedsIcon alt="" src="/admin-meds.svg" />
            <RoundStatus>Round Status</RoundStatus>
          </AdminMedsParent>
          <AdminWrapper>
            <Admin>Admin</Admin>
          </AdminWrapper>
        </FrameGroup>
      </FrameWrapper>
    </FrameParentRoot>
  );
};

export default FrameComponent2;
