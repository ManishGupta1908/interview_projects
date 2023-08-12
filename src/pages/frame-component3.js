import styled from "styled-components";
import MainHeader from "../components/main-header";
import AssessmentContainer from "../components/assessment-container";
import LibraryContainer from "../components/library-container";

const FrameChild = styled.div`
  position: absolute;
  top: 2px;
  left: 156px;
  width: 1264px;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 3px;
  left: 156px;
  width: 1264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameItem = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 1px;
  flex-shrink: 0;
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
`;
const AdminMedsIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
const Round = styled.p`
  margin: 0;
`;
const RoundStatus = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
`;
const AdminMedsParent = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 90px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center;
  font-size: 12px;
  color: #1c4980;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;
const VectorParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  background-color: #fff;
  height: 992px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 16px 20px 20px 30px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParentRoot = styled.div`
  position: relative;
  background-color: #f6f8fa;
  width: 100%;
  height: 1532px;
  overflow: hidden;
  text-align: left;
  font-size: 10px;
  color: #d63500;
  font-family: Inter;
`;
const FrameComponent3 = () => {
  return (
    
    <FrameParentRoot>
      <FrameChild />
      <FrameGroup>
        <MainHeader />
        <AssessmentContainer />
      </FrameGroup>
      <FrameWrapper>
        <FrameContainer>
          <LibraryContainer />
          <VectorParent>
            <FrameItem alt="" src="/vector-2671.svg" />
            <FrameDiv>
              <AdminWrapper>
                <Admin>Admin</Admin>
              </AdminWrapper>
              <AdminMedsParent>
                <AdminMedsIcon alt="" src="/admin-meds.svg" />
                <RoundStatus>
                  <Round>Round</Round>
                  <Round>Status</Round>
                </RoundStatus>
              </AdminMedsParent>
            </FrameDiv>
          </VectorParent>
        </FrameContainer>
      </FrameWrapper>
    </FrameParentRoot>
  );
};

export default FrameComponent3;






//for desktop & laptop