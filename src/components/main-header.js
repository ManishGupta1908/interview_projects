import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Assessment = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 600;
`;
const FrameChild = styled.img`
  position: relative;
  width: 1px;
  height: 46px;
`;
const MyAssessments = styled.div`
  position: relative;
  font-weight: 600;
`;
const MyAssessmentsWrapper = styled.div`
  background-color: #fff;
  border-bottom: 3px solid #0073e6;
  box-sizing: border-box;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #0073e6;
`;
const AssessmentParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
const MobileScreenShareIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const MobileScreenShareWrapper = styled.div`
  border-radius: 70px;
  background-color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const FrameParent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FrameWrapperRoot = styled.div`
  align-self: stretch;
  border-radius: 12px 12px 0px 0px;
  background-color: #fff;
  border-bottom: 1px solid #dde5ea;
  box-sizing: border-box;
  height: 71px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  text-align: left;
  font-size: 20px;
  color: #1c4980;
  font-family: Inter;
`;
const MainHeader = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <FrameWrapperRoot>
      <FrameParent>
        <AssessmentParent>
          <Assessment>Assessment</Assessment>
          <FrameChild alt="" src="/vector-298.svg" />
          <FrameContainer>
            <MyAssessmentsWrapper>
              <MyAssessments>My Assessments</MyAssessments>
            </MyAssessmentsWrapper>
          </FrameContainer>
        </AssessmentParent>
        <MobileScreenShareWrapper onClick={onFrameContainer3Click}>
          <MobileScreenShareIcon alt="" src="/mobile-screen-share.svg" />
        </MobileScreenShareWrapper>
      </FrameParent>
    </FrameWrapperRoot>
  );
};

export default MainHeader;
