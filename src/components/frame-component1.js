import styled from "styled-components";
import SkillsContainer from "./skills-container";
import Typeprimarysizemediumstate from "./typeprimarysizemediumstate";

const CreateNewAssessment = styled.div`
  position: relative;
  font-weight: 600;
`;
const CutIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
`;
const CreateNewAssessmentParent = styled.div`
  align-self: stretch;
  border-radius: 8px 8px 0px 0px;
  background-color: #fff;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
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
  font-size: 14px;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const KeyboardArrowDownIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
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
  font-size: 14px;
`;
const KeyboardArrowDownIcon2 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  opacity: 0;
`;
const HhmmssParent = styled.div`
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
  text-align: left;
  font-size: 14px;
  color: #8da4bf;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  background-color: #fff;
  border: 1px solid #dadce0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-top: -1px;
  font-size: 16px;
`;
const ButtonsWrapper = styled.div`
  align-self: stretch;
  border-radius: 0px 0px 8px 8px;
  background-color: #fff;
  box-shadow: 0px -4px 50px rgba(0, 0, 0, 0.09);
  border-right: 1px solid #dadce0;
  border-bottom: 1px solid #dadce0;
  border-left: 1px solid #dadce0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  align-items: flex-start;
  justify-content: center;
  margin-top: -1px;
`;
const FrameParentRoot = styled.div`
  position: relative;
  width: 591px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: 20px;
  color: #1c4980;
  font-family: Inter;
`;
const FrameComponent1 = ({ onClose }) => {
  return (
    <FrameParentRoot>
      <CreateNewAssessmentParent>
        <CreateNewAssessment>Create new assessment</CreateNewAssessment>
        <CutIcon alt="" src="/cut1.svg" />
      </CreateNewAssessmentParent>
      <FrameGroup>
        <FrameContainer>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Name of assessment</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <TypeHereWrapper>
            <NameOfAssessment>Type Here</NameOfAssessment>
          </TypeHereWrapper>
        </FrameContainer>
        <FrameContainer>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Purpose of the test is</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <SelectParent>
            <NameOfAssessment>Select</NameOfAssessment>
            <KeyboardArrowDownIcon alt="" src="/keyboard-arrow-down1.svg" />
          </SelectParent>
        </FrameContainer>
        <FrameContainer>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Description</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <SelectParent>
            <NameOfAssessment>Select</NameOfAssessment>
            <KeyboardArrowDownIcon alt="" src="/keyboard-arrow-down.svg" />
          </SelectParent>
        </FrameContainer>
        <SkillsContainer />
        <FrameContainer>
          <NameOfAssessmentWrapper>
            <NameOfAssessment>Duration of assessment</NameOfAssessment>
          </NameOfAssessmentWrapper>
          <HhmmssParent>
            <NameOfAssessment>HH:MM:SS</NameOfAssessment>
            <KeyboardArrowDownIcon2 alt="" src="/check.svg" />
          </HhmmssParent>
        </FrameContainer>
      </FrameGroup>
      <ButtonsWrapper>
        <Typeprimarysizemediumstate
          button="Save"
          typeprimarysizemediumstatPosition="unset"
          typeprimarysizemediumstatAlignSelf="stretch"
        />
      </ButtonsWrapper>
    </FrameParentRoot>
  );
};

export default FrameComponent1;
