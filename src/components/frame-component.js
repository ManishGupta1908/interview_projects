import styled from "styled-components";
import SectionForm from "./section-form";
import Typeprimarysizemediumstate from "./typeprimarysizemediumstate";

const SubSectionDetails = styled.div`
  position: relative;
  font-weight: 600;
`;
const SubSectionDetailsWrapper = styled.div`
  width: 175px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const CheckIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const CheckWrapper = styled.div`
  border-radius: 60px;
  background-color: #0073e6;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
const CutIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
`;
const CutWrapper = styled.div`
  border-radius: 60px;
  background-color: #fbebea;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  border-radius: 12px 12px 0px 0px;
  background-color: #fff;
  border-bottom: 1px solid #dadce0;
  box-sizing: border-box;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  align-items: flex-start;
  justify-content: center;
`;
const NameOfAssessment = styled.div`
  position: relative;
  font-weight: 500;
`;
const NameOfAssessmentWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TypeHereWrapper = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 15px;
  align-items: center;
  justify-content: flex-start;
  color: #8da4bf;
`;
const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const SelectParent = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  color: #8da4bf;
`;
const KeyboardArrowDownIcon2 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  opacity: 0;
`;
const FrameDiv = styled.div`
  align-self: stretch;
  background-color: #fff;
  height: 517px;
  overflow-y: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 16px 15px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  font-size: 12px;
`;
const ButtonsWrapper = styled.div`
  align-self: stretch;
  background-color: #fff;
  border-top: 1px solid #dadce0;
  box-sizing: border-box;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  align-items: flex-start;
  justify-content: center;
`;
const FrameParentRoot = styled.div`
  position: relative;
  box-shadow: 0px -5px 19px rgba(0, 0, 0, 0.09);
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: 14px;
  color: #1c4980;
  font-family: Inter;
`;
const FrameComponent = ({ onClose }) => {
  return (
    <FrameParentRoot>
      <FrameWrapper>
        <FrameGroup>
          <SubSectionDetailsWrapper>
            <SubSectionDetails>Sub-Section Details</SubSectionDetails>
          </SubSectionDetailsWrapper>
          <FrameContainer>
            <CheckWrapper>
              <CheckIcon alt="" src="/check.svg" />
            </CheckWrapper>
            <CutWrapper>
              <CutIcon alt="" src="/cut.svg" />
            </CutWrapper>
          </FrameContainer>
        </FrameGroup>
      </FrameWrapper>
      <FrameDiv>
        <FrameParent1>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Name of assessment</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <TypeHereWrapper>
            <NameOfAssessment>Type Here</NameOfAssessment>
          </TypeHereWrapper>
        </FrameParent1>
        <FrameParent1>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Purpose of the test is</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <SelectParent>
            <NameOfAssessment>Select</NameOfAssessment>
            <CheckIcon alt="" src="/keyboard-arrow-down.svg" />
          </SelectParent>
        </FrameParent1>
        <FrameParent1>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Description</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <SelectParent>
            <NameOfAssessment>Select</NameOfAssessment>
            <CheckIcon alt="" src="/keyboard-arrow-down.svg" />
          </SelectParent>
        </FrameParent1>
        <SectionForm />
        <FrameParent1>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Duration of assessment</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <SelectParent>
            <NameOfAssessment>HH:MM:SS</NameOfAssessment>
            <KeyboardArrowDownIcon2 alt="" src="/check.svg" />
          </SelectParent>
        </FrameParent1>
      </FrameDiv>
      <ButtonsWrapper>
        <Typeprimarysizemediumstate
          button="Next"
          typeprimarysizemediumstatPosition="unset"
          typeprimarysizemediumstatAlignSelf="stretch"
        />
      </ButtonsWrapper>
    </FrameParentRoot>
  );
};

export default FrameComponent;
