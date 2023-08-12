import { useState, useCallback } from "react";
import FrameComponent2 from "../components/frame-component2";
import PortalPopup from "../components/portal-popup";
import FrameComponent from "../components/frame-component";
import StatusBar1 from "../components/status-bar1";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AssessmentForm1 from "../components/assessment-form1";

const SegmentIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SegmentWrapper = styled.div`
  border-radius: 60px;
  background-color: #f2f8fe;
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
const Assessment = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 600;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const LaptopMacIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LaptopMacWrapper = styled.div`
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
const FrameGroup = styled.div`
  background-color: #fff;
  width: 375px;
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0px 15px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const MyAssessments = styled.div`
  position: relative;
  font-weight: 500;
`;
const MyAssessmentsWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  border-bottom: 2px solid #0073e6;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
`;
const UnstopAssessmentsWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  border-bottom: 2px solid #f6f8fa;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  color: #3e6493;
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapper = styled.div`
  background-color: #fff;
  width: 375px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 14px;
  color: #0073e6;
`;
const StatusBarParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Component61Wrapper = styled.div`
  background-color: #fff;
  width: 375px;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AddIcon = styled.img`
  position: relative;
  width: 28.57px;
  height: 28.57px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AddWrapper = styled.div`
  position: absolute;
  top: 753px;
  left: 310px;
  border-radius: 51.43px;
  background-color: #0073e6;
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 7.142857551574707px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Iphone13Mini7Root = styled.div`
  position: relative;
  background-color: #f6f8fa;
  width: 100%;
  height: 1390px;
  text-align: left;
  font-size: 16px;
  color: #1c4980;
  font-family: Inter;
`;
const IPhone13Mini7 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/frame-1000009409");
  }, [navigate]);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);

  const onFrameContainer155Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Iphone13Mini7Root>
        <FrameParent>
          <StatusBarParent>
            <StatusBar1
              vector="/vector3.svg"
              vector1="/vector4.svg"
              frame1000007851="/frame-10000078511.svg"
              statusBarPosition="unset"
            />
            <FrameGroup>
              <FrameContainer>
                <SegmentWrapper onClick={openFrame}>
                  <SegmentIcon alt="" src="/segment.svg" />
                </SegmentWrapper>
                <Assessment>Assessment</Assessment>
              </FrameContainer>
              <LaptopMacWrapper onClick={onFrameContainer3Click}>
                <LaptopMacIcon alt="" src="/laptop-mac.svg" />
              </LaptopMacWrapper>
            </FrameGroup>
            <FrameWrapper>
              <FrameDiv>
                <MyAssessmentsWrapper>
                  <MyAssessments>My Assessments</MyAssessments>
                </MyAssessmentsWrapper>
                <UnstopAssessmentsWrapper>
                  <MyAssessments>Unstop Assessments</MyAssessments>
                </UnstopAssessmentsWrapper>
              </FrameDiv>
            </FrameWrapper>
          </StatusBarParent>
          <Component61Wrapper>
            <AssessmentForm1
              imageDimensions="/add2.svg"
              imageDimensionsText="/link7.svg"
              imageDimensionsCode="/link8.svg"
              imageDimensionsTextCode="/link9.svg"
              imageDimensionsTextCode2="/link9.svg"
              imageDimensionsTextCode3="/link8.svg"
              imageDimensionsCodeText="/link8.svg"
              imageDimensionsTextCode4="/link10.svg"
              showVectorIcon={false}
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propCursor="pointer"
            />
          </Component61Wrapper>
        </FrameParent>
        <AddWrapper onClick={openFrame2}>
          <AddIcon alt="" src="/add3.svg" />
        </AddWrapper>
        <FrameParent>
          <StatusBar1
            vector="/vector3.svg"
            vector1="/vector4.svg"
            frame1000007851="/frame-10000078511.svg"
            statusBarPosition="unset"
          />
          <FrameGroup>
            <FrameContainer>
              <SegmentWrapper onClick={openFrame3}>
                <SegmentIcon alt="" src="/segment.svg" />
              </SegmentWrapper>
              <Assessment>Assessment</Assessment>
            </FrameContainer>
            <LaptopMacWrapper onClick={onFrameContainer155Click}>
              <LaptopMacIcon alt="" src="/laptop-mac.svg" />
            </LaptopMacWrapper>
          </FrameGroup>
          <FrameWrapper>
            <FrameDiv>
              <MyAssessmentsWrapper>
                <MyAssessments>My Assessments</MyAssessments>
              </MyAssessmentsWrapper>
              <UnstopAssessmentsWrapper>
                <MyAssessments>Unstop Assessments</MyAssessments>
              </UnstopAssessmentsWrapper>
            </FrameDiv>
          </FrameWrapper>
        </FrameParent>
      </Iphone13Mini7Root>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent2 onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <FrameComponent onClose={closeFrame2} />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame3}
        >
          <FrameComponent2 onClose={closeFrame3} />
        </PortalPopup>
      )}
    </>
  );
};

export default IPhone13Mini7;


//for mobile